import mongoose from "mongoose";

const joinRequestSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'game', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const joinModel = mongoose.models.joinRequests || mongoose.model("joinRequests", joinRequestSchema);

export default joinModel;