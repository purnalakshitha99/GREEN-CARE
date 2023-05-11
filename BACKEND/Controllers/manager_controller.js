const Manager = require("../Models/manager_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.addManager = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_Manager = await Manager.create(req.body);
  res.status(201).json({
    status: "success",
    added_Manager,
  });
});

//get all items
exports.allManagers = catchAsync(async (req, res, next) => {
  let all_managers = await Manager.find();
  res.json(all_managers);
});

//get specific items
exports.specificManager = catchAsync(async (req, res, next) => {
  let managers = await Manager.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      managers,
    },
  });
});

//update items
exports.updateManager = catchAsync(async (req, res, next) => {
  //   req.body.user = req.user;
  let updateMyManager = await Manager.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(201).json({
    status: "success",
    date: {
      updateMyManager,
    },
  });
});

//Delete items
exports.deleteManager = catchAsync(async (req, res, next) => {
  let deletedManager = await Manager.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedManager,
    },
  });
});
