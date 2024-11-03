import express from 'express'
import { addGame } from '../controller/gameController.js'
import multer from 'multer'

const gameRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage:storage});

gameRouter.post("/add", upload.single("image"), addGame);


export default gameRouter;