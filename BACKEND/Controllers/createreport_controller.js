const report = require("../Models/createreport_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createreport = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let create_report = await report.create(req.body);
  res.status(201).json({
    message: "success",
    create_report,
  });
});

//get all items
exports.Allreports = catchAsync(async (req, res, next) => {
  // let reports = await report.find();
  // res.json(reports);
  res.json(await report.find().limit(20));
});

//get specific items
exports.specificReport = catchAsync(async (req, res, next) => {
  let reports = await report.findById(req.params.id);

  res.status(201).json({
    message: "success",
    data: {
      reports,
    },
  });
});

//update items
exports.updateReport = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updatereport = await report.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    message: "success",
    data: {
      updatereport,
    },
  });
});

//Delete items
exports.deleteReport = catchAsync(async (req, res, next) => {
  let deletedReport = await report.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      deletedReport,
    },
  });
});
