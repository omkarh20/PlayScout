import express from 'express'
import { addVenue, listVenue, removeVenue } from '../controller/venueController.js'
import multer from 'multer'

const venueRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage:storage});

venueRouter.post("/add", upload.single("courtImage"), addVenue);
venueRouter.get("/list", listVenue);
venueRouter.post("/remove", removeVenue);

export default venueRouter;