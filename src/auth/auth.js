const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
exports.checkToken = async (req, res, next) => {
  const token = req.headers['x-Auth-token'] || req.headers['x-auth-token'];
  if (token) {
    let token = req.headers['x-auth-token'];
    console.log('checkToken is working');
    const decoded = jwt.verify(token, 'functionup-radon');
    console.log(decoded);
    next();
  }

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: 'token must be present' });
};

exports.checkUser = async (req, res, next) => {
  let userId = req.params.userId;
  console.log('checkUsr Working');
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send('No such user exists');
  }
  next();
};
