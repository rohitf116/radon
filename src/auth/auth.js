const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
exports.checkToken = async (req, res, next) => {
  console.log('------------------------------');
  let token = req.headers['x-auth-token'];

  if (req.headers['x-auth-token'] == undefined) {
    res.send({ status: false, msg: 'token must be present' });
  }

  if (token) {
    const decoded = jwt.verify(token, 'functionup-radon');
    const userId = req.params.userId;
    const decodedid = decoded.userId;

    userId != decodedid
      ? res.send({ status: false, msg: 'token is defferent' })
      : next();
  }
};

//If no token is present in the request header return error

exports.checkUser = async (req, res, next) => {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send('No such user exists');
  }
  next();
};
