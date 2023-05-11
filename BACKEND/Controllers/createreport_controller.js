const report = require("../Models/createreport_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

exports.createreport = catchAsync(async (req, res, next) => {
  uploadMiddleware.single("file");
  
  const { originalname, path } = req.file;

  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { firstname, lastname, email, arrival, depature, problem, solution,date } =
    req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !arrival ||
    !depature ||
    !problem ||
    !solution||
    !date
  ) {
    return res.status(400).json({ message: " fields are empty" });
  }
  const postDoc = await report.create({
    firstname,
    lastname,
    email,
    arrival,
    depature,
    date,
    problem,
    solution,
    cover: newPath,
  });
  res
    .status(201)
    .json({ message: "Resource created successfully", data: postDoc });
});

//get all items
exports.Allreports = catchAsync(async (req, res, next) => {
  // let reports = await report.find();
  // res.json(reports);
  res.json(await report.find().limit(20));
});

//get specific items
exports.specificReport = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const reports = await report.findById(id);
  res.json(reports);
  console.log(reports);
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
