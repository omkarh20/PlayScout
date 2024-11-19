import express from "express";
import { getSportsNews } from "../controller/newsController.js";

const newsRouter = express.Router();

newsRouter.get("/list", getSportsNews);

export default newsRouter;
