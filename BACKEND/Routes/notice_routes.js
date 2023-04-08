const express = require("express");
const noticeController = require("../Controllers/notice_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student

router
  .route("/")
  .get(noticeController.myAllNotices)
  .post(noticeController.createNotice);

router
  .route("/:id")
  .patch(noticeController.updateMyNotice)
  .delete(noticeController.deleteNotice)
  .get(noticeController.specificNotice);

module.exports = router;
