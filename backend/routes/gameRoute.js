import express from 'express'
import { addGame, listGames, listPlannedGames, removeGame } from '../controller/gameController.js'

const gameRouter = express.Router();

gameRouter.post("/create-game", addGame);
gameRouter.get("/game-list", listGames);
gameRouter.get("/list-planned-games", listPlannedGames);
gameRouter.post("/remove-game", removeGame);

export default gameRouter;