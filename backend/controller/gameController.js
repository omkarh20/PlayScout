import gameModel from "../models/gameModel.js";
import fs from 'fs'


// add game item
const addGame = async (req,res) => {

}

const listGames = async(req,res) => {
    try {
        const games = await gameModel.find();
        res.json({success:true, data:games});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"});
    }
} 

export {addGame, listGames}