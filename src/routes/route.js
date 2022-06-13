const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController");
const BookController = require("../controllers/bookController");
const middleWare = require("../middlewares/commonMiddlewares");
const commonMW = require("../middlewares/commonMiddlewares");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderderController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

// router.post("/createBook", BookController.createBook);

router.post(
  "/createUser",
  middleWare.checkIsFreeAppUser,
  UserController.createUser
);

router.post(
  "/createProduct",

  productController.createProduct
);

router.post(
  "/createOrder",
  commonMW.checkIsFreeAppUser,
  orderController.createOrder
);

router.get(
  "/basicRoute",
  commonMW.checkFree,
  middleWare.checkIsFreeAppUser,
  UserController.basicCode
);

// router.post("/createOrder", orderController.createOrder);
// createOrder

// router.get("/basicRoute2", commonMW.mid1, UserController.basicCode2)
// router.get("/basicRoute3", commonMW.mid2, UserController.basicCode3)
// router.get("/basicRoute4", commonMW.mid1, commonMW.mid4, UserController.basicCode4)

module.exports = router;
