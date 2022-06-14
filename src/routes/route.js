const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../auth/auth');

router.get('/test-me', function (req, res) {
  res.send('My first ever api!');
});

//user creation
router.post('/users', userController.createUser);
//Login
router.post('/login', userController.loginUser);

//The userId is sent by front end
router.get(
  '/users/:userId',
  auth.checkToken,
  auth.checkUser,
  userController.getUserData
);

//Updating user
router.put(
  '/users/:userId',
  auth.checkToken,
  auth.checkUser,
  userController.updateUser
);

//Deleting user
router.delete(
  '/users/:userId',
  auth.checkToken,
  auth.checkUser,
  userController.deleteUser
);

module.exports = router;
