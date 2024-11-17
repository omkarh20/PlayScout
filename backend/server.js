import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import gameRouter from "./routes/gameRoute.js";
import venueRouter from "./routes/venueRoute.js";
import userRouter from "./routes/userRoute.js";
import bookingsRouter from "./routes/bookingsRoute.js";
import joinRouter from "./routes/joinRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/game", gameRouter);
app.use("/api/venue", venueRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/bookings",bookingsRouter);
app.use("/api/join",joinRouter);

app.get("/", (req,res)=>{
    res.send("API Working");
});

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
});