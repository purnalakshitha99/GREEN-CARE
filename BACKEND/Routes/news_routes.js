const express = require("express");
import {
    addNews,
    deleteNews,
    getAllNews,
    getById,
    getByUserId,
    updateNews,
  } from "../Controllers/news_controller";

//const authController = require("../Controllers/auth_controller");
const newsRouter = express.Router();

newsRouter.get("/", getAllNews);
newsRouter.post("/add", addNews);
newsRouter.put("/update/:id", updateNews);
newsRouter.get("/:id", getById);
newsRouter.delete("/:id", deleteNews);
newsRouter.get("/user/:id", getByUserId); // getting nes from the user

export default newsRouter;
