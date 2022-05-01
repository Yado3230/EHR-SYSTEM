const express = require('express');
const EventEmitter = require('events');
const authControllers = require('../controllers/authController');
const {
  signup,
  login,
  updatePassword,
  protect,
  forgotPassword,
  resetPassword,
  updateMe,
  deleteMe,
} = authControllers;

const router = express.Router();

class MyEmitter extends EventEmitter {}
var emitter = new MyEmitter();
emitter.setMaxListeners(20);

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:token').patch(resetPassword);
router.route('/updateMyPassword').patch(updatePassword);
router.route('/updateMe').patch(protect, updateMe);
router.route('/deleteMe').delete(protect, deleteMe);

module.exports = router;
