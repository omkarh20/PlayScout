import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { connectDB } from "./config/db.js";
import gameRouter from "./routes/gameRoute.js";
import venueRouter from "./routes/venueRoute.js";
import userRouter from "./routes/userRoute.js";
import bookingsRouter from "./routes/bookingsRoute.js";
import joinRouter from "./routes/joinRoute.js";
import newsRouter from "./routes/newsRoute.js";
import messageRouter from "./routes/messageRoute.js";
import messageModel from "./models/messageModel.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.REACT_APP_FRONTEND_URL,
    methods: ["GET", "POST"]
  }
});
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/game", gameRouter);
app.use("/api/venue", venueRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/bookings",bookingsRouter);
app.use("/api/join",joinRouter);
app.use("/api/news-list",newsRouter);
app.use("/api/message", messageRouter);

app.get("/", (req,res)=>{
    res.send("API Working");
});

io.on("connection", (socket) => {
  console.log("New client connected: ", socket.id);

  socket.on("join", ({ userId }) => {
    socket.join(userId);
    console.log(`${userId} joined their room`);
  });

  socket.on("send-message", async ({ senderId, recipientId, content }) => {
    try {
      const newMessage = new messageModel({
        senderId,
        recipientId,
        content,
      });
      await newMessage.save();

      const savedMessage = await messageModel.findById(newMessage._id)
        .populate("senderId", "_id name")
        .populate("recipientId", "_id name")
        .exec();

      io.to(recipientId).emit("receive-message", savedMessage);

      socket.emit("message-sent", savedMessage);
      
    } catch (err) {
      console.error("Error saving or emitting message:", err);
      socket.emit("error", "Message failed to send.");
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

server.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
});