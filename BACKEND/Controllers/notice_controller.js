const Notice = require("../Models/notice_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createNotice = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_notice = await Notice.create(req.body);
  res.status(201).json({
    status: "success",
    date: {
      added_notice,
    },
  });
});

//get all notices
exports.myAllNotices = catchAsync(async (req, res, next) => {
  let all_notices = await Notice.find({ user: req.user });

  res.status(201).json({
    status: "success",
    data: {
      all_notices,
    },
  });
});

//get specific notices
exports.specificNotice = catchAsync(async (req, res, next) => {
  let notices = await Notice.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      notices,
    },
  });
});

//update notices
exports.updateMyNotice = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let all_notices = await Notice.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    status: "success",
    date: {
      all_notices,
    },
  });
});

//Delete notices
exports.deleteNotice = catchAsync(async (req, res, next) => {
  let deletedNotice = await Notice.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedNotice,
    },
  });
});
