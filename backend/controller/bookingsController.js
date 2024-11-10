import bookingsModel from "../models/bookingsModel.js";
import jwt from 'jsonwebtoken'

const addBooking = async (req,res) => {
    try {
        const { courtName, courtLocation, courtImage, sport, membersJoined, totalMembers, date, slot } = req.body;

        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;
    
        const newBooking = new bookingsModel({
          userID,
          courtName,
          courtLocation,
          courtImage,
          sport,
          membersJoined,
          totalMembers,
          date,
          slot
        });
    
        await newBooking.save();
        res.status(201).json({ success: true, message: "Booking added successfully", data: newBooking });
      } catch (error) {
        console.error("Error adding booking:", error);
        res.status(500).json({ success: false, message: "Error adding booking" });
      }
}

const listBookings = async (req,res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;
    
        const bookings = await bookingsModel.find({userID});
    
        res.status(200).json({ success: true, data: bookings });
      } catch (error) {
        console.error("Error listing bookings:", error);
        res.status(500).json({ success: false, message: "Error listing bookings" });
      }
}

const removeBooking = async (req,res) => {
  try {
      await bookingsModel.findByIdAndDelete(req.body.id);
      res.json({success:true, message: "Booking Removed!"});
  } catch (error) {
      console.log(error);
      res.json({success:false, message:"Error"});
  }
};

export {addBooking, listBookings, removeBooking};