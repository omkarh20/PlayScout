import venueModel from "../models/venueModel.js";
import fs from 'fs'
import { sportIcons } from "../assetsBackend/assetsBackend.js";

// add venue item
const addVenue = async (req,res) => {
    let image_filename = `${req.file.filename}`;
    
    const { courtName, sport, courtLocation, courtsAvailable, price} = req.body;

    const game_icon = sportIcons[sport] || null;

    const venue = new venueModel({
        courtName,
        sport,
        courtLocation,
        courtsAvailable,
        price,
        courtImage: image_filename,
        game_icon,
        rating: 0.0
    });

    try {
        await venue.save();
        res.json({success:true, message:"Venue Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

// venue list
const listVenue = async (req,res) => {
    try {
        const venues = await venueModel.find({});
        res.json({success:true, data:venues});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
};

// remove venue
const removeVenue = async (req,res) => {
    try {
        const venue = await venueModel.findById(req.body.id);
        fs.unlink(`uploads/${venue.courtImage}`, ()=>{});
        await venueModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Venue Removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
};

export {addVenue, listVenue, removeVenue};