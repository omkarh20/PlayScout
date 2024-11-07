import express from 'express'
import { addVenue, listVenue, removeVenue, listVenueBook } from '../controller/venueController.js'
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

venueRouter.post("/add", upload.single("court-image"), addVenue);
venueRouter.get("/list", listVenue);
venueRouter.post("/remove", removeVenue);
venueRouter.get("/venue-list", listVenueBook);

export default venueRouter;