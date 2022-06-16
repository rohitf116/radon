/* eslint-disable node/no-unsupported-features/es-builtins */
/* eslint-disable node/no-unsupported-features/es-syntax */
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const createUser = async function(abcd, xyz) {
  try {
    const data = abcd.body;
    if (Object.values(data).length === 0) {
      xyz
        .status(400)
        .send({ status: 'fail', msg: 'Please provide input to add user' });
    } else {
      const savedData = await userModel.create(data);
      xyz.status(201).send({ msg: savedData });
    }
  } catch (err) {
    xyz.status(400).send({ status: 'fail', msg: err.message });
  }
};

const loginUser = async function(req, res) {
  try {
    const userName = req.body.emailId;
    const { password } = req.body;
    const user = await userModel.findOne({
      emailId: userName,
      password: password
    });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: 'username or the password is not corerct'
      });

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: 'thorium',
        organisation: 'FunctionUp'
      },
      'functionup-radon'
    );
    res.status(200).send({ status: true, token: token });
  } catch (error) {
    res.status(500).send({ status: 'fail', msg: error.message });
  }
};

const getUserData = async function(req, res) {
  try {
    console.log(myName);
    const { userId } = req.params;
    const userDetails = await userModel.findById(userId);
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    res.status(500).send({ status: 'fail', msg: error.message });
  }
};

const updateUser = async function(req, res) {
  try {
    const { userId } = req.params;
    const userData = req.body;
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      {
        new: true
      }
    );
    res.status(200).send({ status: updatedUser, data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: 'fail', msg: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const idOf = req.params.userId;
    const deleteUser = await userModel.findByIdAndUpdate(
      { _id: idOf },
      { $set: { isDeleted: true } }
    );
    res.status(200).send({ deleteUser });
  } catch (error) {
    res.status(500).send({ status: 'fail', msg: error.message });
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
