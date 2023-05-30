const Appointment = require("../Models/appointments_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createAppointment = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_appointment = await Appointment.create(req.body);
  res.status(201).json({
    status: "success",
    added_appointment,
  });
});

//get all Appointment
exports.AllAppointment = catchAsync(async (req, res, next) => {
  let all_appointment = await Appointment.find();

  res.status(201).json({
    status: "success",
    all_appointment,
  });
});

//get specific Appointment
exports.specificAppointment = catchAsync(async (req, res, next) => {
  let appointment = await Appointment.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
        appointment,
    },
  });
});

//update Appointment
exports.updateAppointment = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updateAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    status: "success",
    date: {
      updateAppointment,
    },
  });
});

//Delete Appointment
exports.deleteAppointment = catchAsync(async (req, res, next) => {
  let deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedAppointment,
    },
  });
});
