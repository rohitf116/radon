const moment = require("moment");
const mongoose = require("mongoose");
const http = require("http");

const globalMW = async function (req, res, next) {
  console.log(moment().format("YYYY-MM-DD  h:mm:ss "), req.ip, req.originalUrl);
  next();
};

module.exports.globalMW = globalMW;
