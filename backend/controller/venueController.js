import venueModel from "../models/venueModel.js";
import fs from 'fs'
import jwt from 'jsonwebtoken';

const addVenue = async (req,res) => {
    let image_filename = `${req.file.filename}`;
    
    const { courtName, sport, courtLocation, courtsAvailable, price} = req.body;

    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userID = decoded.id;

    const game_icon = `${sport.replace(/\s+/g, '').toLowerCase()}_icon` || null;

    const venue = new venueModel({
        courtName,
        sport,
        courtLocation,
        courtsAvailable,
        price,
        courtImage: image_filename,
        game_icon,
        rating: 0.0,
        userID
    });

    try {
        await venue.save();
        res.json({success:true, message:"Venue Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

const listVenue = async (req,res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;

        const venues = await venueModel.find({userID});
        res.json({success:true, data:venues});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
};

const removeVenue = async (req,res) => {
    try {
        const venue = await venueModel.findById(req.body.id);
        fs.unlink(`uploads/${venue.courtImage}`, ()=>{});
        await venueModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Venue Removed!"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
};

const listVenueBook = async (req,res) => {
    try {
        const venues = await venueModel.find();
        res.json({success:true, data:venues});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

export {addVenue, listVenue, removeVenue, listVenueBook};