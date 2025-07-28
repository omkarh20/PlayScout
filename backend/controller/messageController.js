import messageModel from "../models/messageModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose"

const sendMessage = async (req, res) => {
    try {
        const { recipientId, content } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const senderId = decoded.id;

        const message = new messageModel({
            senderId,
            recipientId,
            content,
        });

        await message.save();
        res.json({ success: true, message: "Message sent" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error sending message" });
    }
};

const getMessages = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const userObjectId = new mongoose.Types.ObjectId(String(userId));

    const messages = await messageModel.find({
      $or: [
        { senderId: userObjectId },
        { recipientId: userObjectId }
      ]
    })
    .populate('senderId', 'name userImage')
    .populate('recipientId', 'name userImage')
    .sort({ createdAt: 1 });

        res.json({ success: true, data: messages });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching messages" });
    }
};

const deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        if (!mongoose.Types.ObjectId.isValid(messageId)) {
            return res.json({ success: false, message: "Invalid message ID" });
        }
        const message = await messageModel.findById(messageId);
        if (!message) {
            return res.json({ success: false, message: "Message not found" });
        }

        if (String(message.senderId) !== userId) {
            return res.json({ success: false, message: "Unauthorized to delete this message" });
        }

        await messageModel.deleteOne({ _id: messageId });
        res.json({ success: true, message: "Message deleted" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error deleting message" });
    }
};

const storeMessage = async ({ senderId, recipientId, content }) => {
  const message = new messageModel({ senderId, recipientId, content });
  return await message.save();
};

export { sendMessage, getMessages, deleteMessage, storeMessage };
