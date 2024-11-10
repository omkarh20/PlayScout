import express from 'express'
import { addBooking, listBookings, removeBooking } from '../controller/bookingsController.js';

const bookingsRouter = express.Router();

bookingsRouter.post("/add-booking",addBooking);
bookingsRouter.get("/list-bookings",listBookings);
bookingsRouter.post("/cancel-booking", removeBooking);

export default bookingsRouter;