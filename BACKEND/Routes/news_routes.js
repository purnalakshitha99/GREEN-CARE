const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'news_images/' });

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
newsRouter.post("/add", upload.single('image'), addNews); // edited for image upload
newsRouter.put("/update/:id", updateNews);
newsRouter.get("/:id", getById);
newsRouter.delete("/:id", deleteNews);
newsRouter.get("/user/:id", getByUserId); // getting news from the user

export default newsRouter;
