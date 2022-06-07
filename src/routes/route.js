const express = require("express");
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController = require("../controllers/bookController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.post("/createAuthor", BookController.createAuthor);
router.post("/createBook", BookController.createBook);
router.get("/chetan", BookController.chetan);
router.get("/authorOfTwoStates", BookController.authorOfTwoStates);
router.get("/findBook", BookController.findBook);
module.exports = router;
