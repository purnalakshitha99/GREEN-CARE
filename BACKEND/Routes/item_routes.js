const express = require("express");
const itemontroller = require("../Controllers/item_controller");
//const authController = require("../Controllers/auth_controller");
const router = express.Router();

//This api-resource route for update and delete specific student

router
  .route("/item")
  .get(itemontroller.myAllItems)
  .post(itemontroller.createItem);

router
  .route("/item/:id")
  .patch(itemontroller.updateMyItem)
  .delete(itemontroller.deleteItem)
  .get(itemontroller.specificItems);

module.exports = router;
