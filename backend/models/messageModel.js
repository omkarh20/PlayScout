import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  content: {type: String, required: true},
  timestamp: { type: Date, default: Date.now }
});

const messageModel = mongoose.models.message || mongoose.model("message", messageSchema);

export default messageModel;