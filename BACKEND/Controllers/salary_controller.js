const Salary = require("../Models/salary_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createSalary = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_salary = await Salary.create(req.body);
  res.status(201).json({
    status: "success",
    added_salary,
  });
});

//get all salaries
exports.myAllSalary = catchAsync(async (req, res, next) => {
  let all_salary = await Salary.find();
  res.json(all_salary);
});

//get specific salary
exports.specificSalary = catchAsync(async (req, res, next) => {
  let salaries = await Salary.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      salaries,
    },
  });
});

//update salary
exports.updateMySalary = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updateMySalary = await Salary.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    status: "success",
    date: {
      updateMySalary,
    },
  });
});

//Delete salary
exports.deleteSalary = catchAsync(async (req, res, next) => {
  let deletedSalary = await Salary.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedSalary,
    },
  });
});
