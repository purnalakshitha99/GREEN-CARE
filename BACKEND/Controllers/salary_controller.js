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

// exports.getEmployeeSalary = async (req, res) => {
//   try {
//     const employeeSalary = await Salary.find({ employee_id: req.params.employee_id });
//     if (employeeSalary.length === 0) {
//       return res.status(404).json({ message: "Salary not found for the specified employee ID" });
//     }
//     res.status(200).json(employeeSalary);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


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

//get employee ID from employees

// exports.getEmployeeId