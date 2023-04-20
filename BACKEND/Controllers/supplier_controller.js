const Supplier = require("../Models/suppliers_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createSupplier = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_supplier = await Supplier.create(req.body);
  res.status(201).json({
    status: "success",
    added_supplier,
  });
});

//get all items
exports.myAllSuppliers = catchAsync(async (req, res, next) => {
  let all_suppliers = await Supplier.find();
  res.json(all_suppliers);
});

//get specific items
exports.specificSupplier = catchAsync(async (req, res, next) => {
  let suppliers = await Supplier.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      suppliers,
    },
  });
});

//update items
exports.updateSupplier = catchAsync(async (req, res, next) => {
  //   req.body.user = req.user;
  let updateMySupplier = await Supplier.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.status(201).json({
    status: "success",
    date: {
      updateMySupplier,
    },
  });
});

//Delete items
exports.deleteSupplier = catchAsync(async (req, res, next) => {
  let deletedSupplier = await Supplier.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedSupplier,
    },
  });
});
