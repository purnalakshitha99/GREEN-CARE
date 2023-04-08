const Item = require("../Models/item_model");
const catchAsync = require("../Utils/catchAsync");
const AppError = require("../Utils/AppError");

exports.createItem = catchAsync(async (req, res, next) => {
  // req.body.user = req.user;
  console.log(req.body);
  let added_item = await Item.create(req.body);
  res.status(201).json({
    status: "success",
    added_item,
  });
});

//get all items
exports.myAllItems = catchAsync(async (req, res, next) => {
  let all_items = await Item.find();

  res.status(201).json({
    status: "success",
    all_items,
  });
});

//get specific items
exports.specificItems = catchAsync(async (req, res, next) => {
  let items = await Item.findById(req.params.id);

  res.status(201).json({
    status: "success",
    data: {
      items,
    },
  });
});

//update items
exports.updateMyItem = catchAsync(async (req, res, next) => {
  req.body.user = req.user;
  let updateMyItem = await Item.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    status: "success",
    date: {
      updateMyItem,
    },
  });
});

//Delete items
exports.deleteItem = catchAsync(async (req, res, next) => {
  let deletedItem = await Item.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    date: {
      deletedItem,
    },
  });
});
