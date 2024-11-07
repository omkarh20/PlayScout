import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    date: {type:String, required:true},
    filterDate: {type:String, required:true},
    sportIcon: {type:String, required:true},
    sportName: {type:String, required:true},
    userImage: {type:String, required:true},
    userName:{type:String, required:true},
    membersJoined:{type:Number, required:true},
    totalMembers:{type:Number, required:true},
    level:{type:String, required:true},
    courtName:{type:String, required:true},
    location:{type:String, required:true},
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
});

const gameModel = mongoose.models.game || mongoose.model("game", gameSchema);

export default gameModel;