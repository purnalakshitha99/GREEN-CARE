const catchAsync = require("../Utils/catchAsync");
const damagereport = require("../Models/damagereport_model");
const AppError = require("../Utils/AppError");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

exports.createDamageReport = catchAsync(async (req, res, next) => {
  console.log("createDamageReport");
  // uploadMiddleware.single("file");

  // const { originalname, path } = req.file;

  // const parts = originalname.split(".");
  // const ext = parts[parts.length - 1];
  // const newPath = path + "." + ext;
  // fs.renameSync(path, newPath);

  const {
    fullname,
    email,
    phonenumber,
    d_arrival,
    d_departure,
    date,
    damagedetails,
  } = req.body;

  if (
    !fullname ||
    !phonenumber ||
    !d_arrival ||
    !d_departure ||
    !email ||
    !date ||
    !damagedetails
  ) {
    return res.status(400).json({ message: " fields are empty!!" });
  }
  const postDoc = await report.create({
    fullname,
    email,
    phonenumber,
    d_arrival,
    d_departure,
    date,
    damagedetails,
    cover: newPath,
  });
  res
    .status(201)
    .json({ massege: "Resource created successfully", data: postDoc });
});
//get all items
exports.Allreports = catchAsync(async (req, res, next) => {
  // let reports = await report.find();
  // res.json(reports);
  res.json(await damagereport.find().limit(20));
});

//get specific items
exports.specificReport = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const reports = await damagereport.findById(id);
  res.json(reports);
  console.log(reports);
});

//update items
exports.updateReport = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updatereport = await damagereport.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(201).json({
    message: "success",
    data: {
      updatereport,
    },
  });
});

//Delete items
exports.deleteReport = catchAsync(async (req, res, next) => {
  let deletedReport = await damagereport.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      deletedReport,
    },
  });
});
