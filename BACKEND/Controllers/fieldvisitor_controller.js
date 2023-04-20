const Visitor = require("../Models/fieldvisitor_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.addFarmer = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_farmer = await Visitor.create(req.body);
  res.status(201).json({
    message: "success",
    added_farmer,
  });
});

//get all items
exports.AllCustomers = catchAsync(async (req, res, next) => {
  let all_farmers = await Visitor.find();
  res.json(all_farmers);
});

//get specific items
exports.specificFarmer = catchAsync(async (req, res, next) => {
  let farmers = await Visitor.findById(req.params.id);

  res.status(201).json({
    message: "success",
    data: {
      farmers,
    },
  });
});

//update items
exports.updateCusFarmer = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updatefarmer = await Visitor.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    message: "success",
    data: {
      updatefarmer,
    },
  });
});

//Delete items
exports.deleteFarmer = catchAsync(async (req, res, next) => {
  let deletedFarmer = await Visitor.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      deletedFarmer,
    },
  });
});
