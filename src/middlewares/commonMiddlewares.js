const userModel = require("../models/userModel");

exports.checkIsFreeAppUser = (req, res, next) => {
  const hed = req.headers["isfreeappuser"];
  req.header("isfree", "false");
  console.log(req.headers);
  if (!hed) {
    console.log("No Header");

    res.send("request is missing a mandatory headerWe require header");
  } else {
    console.log("MW is working");
    next();
  }
};

exports.checkFree = async (req, res, next) => {
  const isFree = req.headers.isfreeappuser;
  const data = req.body;
  console.log(req.headers);
  if (isFree == true) {
    console.log("header is true");
    const person = await userModel.findById(data.userId);
    next();
  } else {
    console.log("header is false");
    res.send({});
    next();
  }
};
