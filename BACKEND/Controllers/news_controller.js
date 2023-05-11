const News = require("../Models/news_model");
const mongoose = require('mongoose');
//import User from "../Models/User"; // user import *****
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");
import multer from 'multer';




export const getAllNews = async (req, res, next) => {
  try {
    const news = await News.find();
    if (!news) {
      return res.status(404).json({ message: "No News to Display!" });
    }
    return res.status(200).json({ news });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};
const upload = multer({ dest: 'news_images/' }); 

export const addNews = async (req, res, next) => {
  const { title, description } = req.body;
  //for user
    // let existingUser;
    // try {
    //   existingUser = await User.findById(user);
    // } catch (err) {
    //   return console.log(err);
    // }
    // if (!existingUser) {
    //   return res.status(400).json({ message: " cannot find the user by this id" });
    // }
    //upto here
    const news = new News({
      title,
      description,
      image: req.file.path,
    });
    
    try {
      const session = await mongoose.startSession();
      session.startTransaction();
      await news.save({ session });
      // existingUser.news.push(news);
      // await existingUser.save({ session }); user
      await session.commitTransaction();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    }
  
    return res.status(200).json({ news });
  };

  export const updateNews = async (req, res, next) => {
    const { title, description } = req.body;
    const newsId = req.params.id;
    let news;
    try {
      news = await News.findByIdAndUpdate(newsId, {
        title,
        description,
      }, { new: true });
      
    } catch (err) {
      return console.log(err);
    }
    if (!news) {
      return res.status(500).json({ message: "Unable To Update The news" });
    }
    return res.status(200).json({ news });
  };
  export const getById = async (req, res, next) => {
    const id = req.params.id;
    let news;
    try {
      news = await News.findById(id);
    } catch (err) {
      return console.log(err);
    }
    if (!news) {
      return res.status(404).json({ message: "No News Found!!" });
    }
    return res.status(200).json({ news });
  };
  
  export const deleteNews = async (req, res, next) => {
    const id = req.params.id;
    let news;
  
    try {
      news = await News.findByIdAndRemove(id);
      if (!news) {
        return res.status(404).json({ message: "No News Found!!" });
      }
  
      return res.status(200).json({ message: "Successfully Deleted" });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Unable To Delete" });
    }
  };
  
  
  export const getByUserId = async (req, res, next) => {
    const userId = req.params.id;
    let userNews;
    try {
      userNews = await User.findById(userId).populate("News");
    } catch (err) {
      return console.log(err);
    }
    if (!userNews) {
      return res.status(404).json({ message: "No news Found" });
    }
    return res.status(200).json({ news: userNews });
  };