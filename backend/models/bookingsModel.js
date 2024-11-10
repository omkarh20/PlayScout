import mongoose from "mongoose";

const bookingsSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    courtName: {type:String, required:true},
    courtLocation: {type:String, required:true},
    courtImage:{type:String, required:true},
    sport: {type:String, required:true},
    membersJoined:{type:Number, required:true},
    totalMembers:{type:Number, required:true},
    date: {type:String, required:true},
    slot: {type:String, required:true}
});

const bookingsModel = mongoose.models.bookings || mongoose.model("bookings", bookingsSchema);

export default bookingsModel;