import gameModel from "../models/gameModel.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";
import joinModel from "../models/joinModel.js";

const addGame = async (req, res) => {
    try {
        const { date, filterDate, sportIcon, sportName, userImage, membersJoined, totalMembers, level, courtName, location } = req.body;
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;

        const user = await userModel.findById(userID);
        const userName = user ? user.name : "Anonymous";

        const newGame = new gameModel({
            date,
            filterDate,
            sportIcon,
            sportName,
            userImage,
            userName,
            membersJoined,
            totalMembers,
            level,
            courtName,
            location,
            userID
        });

        await newGame.save();
        res.status(201).json({ success: true, message: "Game created successfully", data: newGame });

    } catch (error) {
        console.error("Error adding game:", error);
        res.status(500).json({ success: false, message: "Error adding game" });
    }
};

const listGames = async(req,res) => {
    try {
        const games = await gameModel.find();
        res.json({success:true, data:games});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
}

const listPlannedGames = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userID = decoded.id;

        const acceptedRequests = await joinModel.find({senderId:userID, status: 'accepted'});
        const acceptedGameIds = acceptedRequests.map(request => request.gameId);

    
        const games = await gameModel.find({
            $or: [
                { userID: userID }, 
                { _id: { $in: acceptedGameIds } } 
                ]
        });

    res.json({ success: true, data: games });
    } catch (error) {
        console.error("Error listing planned games:", error);
        res.status(500).json({ success: false, message: "Error fetching planned games" });
    }
};

const removeGame = async (req, res) => {
    try {
        const { id } = req.body;
        await gameModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Game removed successfully" });
    } catch (error) {
        console.error("Error removing game:", error);
        res.status(500).json({ success: false, message: "Error removing game" });
    }
};

export {addGame, listGames, listPlannedGames, removeGame}