/* eslint-disable node/no-unsupported-features/es-syntax */
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.checkToken = async (req, res, next) => {
  try {
    const token = req.headers['x-auth-token'];

    // eslint-disable-next-line eqeqeq
    if (req.headers['x-auth-token'] == undefined) {
      res.status(403).send({ status: false, msg: 'token must be present' });
    }
    const uId = await userModel.findById(req.params.userId);

    if (uId == null) {
      return res
        .status(404)
        .send({ status: false, msg: 'user does not exist' });
    }
    if (token) {
      const decoded = jwt.verify(token, 'functionup-radon');
      const { userId } = req.params;
      const decodedid = decoded.userId;

      // eslint-disable-next-line no-unused-expressions
      userId !== decodedid
        ? res.status(403).send({ status: false, msg: 'token is defferent' })
        : next();
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//If no token is present in the request header return error

exports.checkUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.send('No such user exists');
    }
    next();
  } catch (error) {
    res.status(500).send({ status: 'fail', msg: error.message });
  }
};
