import express from 'express'
import { sendMessage, getMessages, deleteMessage } from '../controller/messageController.js'

const messageRouter = express.Router();

messageRouter.post("/send-message", sendMessage);
messageRouter.get("/get-messages", getMessages);
messageRouter.get("/delete-message", deleteMessage);

export default messageRouter;