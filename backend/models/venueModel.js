import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
    courtName: {type:String, required:true},
    sport: {type:String, required:true},
    courtLocation: {type:String, required:true},
    courtsAvailable:{type:Number, required:true},
    price:{type:Number, required:true},
    courtImage:{type:String, required:true},
    game_icon:{type:String, required:true},
    rating:{type:Number, default:0.0}
});

const venueModel = mongoose.models.venue || mongoose.model("venue", venueSchema);

export default venueModel;