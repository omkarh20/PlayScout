import joinModel from "../models/joinModel.js";
import gameModel from "../models/gameModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose"

const sendRequest = async (req, res) => {
    try {
        const { recipientId, gameId } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const senderId = decoded.id;

        const joinRequest = new joinModel({
            senderId,
            recipientId,
            gameId,
            status: 'pending',
        });

        await joinRequest.save();
        res.json({ success: true, message: "Join request sent" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error sending request" });
    }
};

const getRequest = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const userObjectId = new mongoose.Types.ObjectId(userId);

        const joinRequests = await joinModel.find({ recipientId: userObjectId }).populate('senderId', 'name email');
        res.json({ success: true, data: joinRequests });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching requests" });
    }
};

const respondRequest = async (req, res) => {
    try {
        const { requestId, status } = req.body;

        if (!['accepted', 'declined'].includes(status)) {
            return res.json({ success: false, message: "Invalid status" });
        }

        const joinRequest = await joinModel.findById(requestId);

        if (!joinRequest) {
            return res.json({ success: false, message: "Request not found" });
        }

        joinRequest.status = status;
        await joinRequest.save();
        
        if(joinRequest.status === 'accepted') {
            const game = await gameModel.findById(joinRequest.gameId);
            game.membersJoined += 1;
            await game.save();
        }

        res.json({ success: true, message: `Request ${status}` });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error responding to request" });
    }
};

export { sendRequest, getRequest, respondRequest };
