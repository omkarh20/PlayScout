import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import gameRouter from "./routes/gameRoute.js";
import venueRouter from "./routes/venueRoute.js";
import userRouter from "./routes/userRoute.js";
import bookingsRouter from "./routes/bookingsRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/game", gameRouter);
app.use("/api/venue", venueRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/bookings",bookingsRouter);

app.get("/", (req,res)=>{
    res.send("API Working");
});

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
});

// mongodb+srv://omkarhegde20:2015350199@cluster0.iewrs.mongodb.net/?