const express = require('express');
const staffController = require('./../controllers/staffController');
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;
const { getAllStaffs, createStaff, getStaff, deleteStaff } = staffController;
const router = express.Router();

router
  .route('/')
  .get(getAllStaffs)
  .post(protect, restrictTo('superAdmin', 'doctor', 'admin'), createStaff);
router.route('/:id').get(getStaff);
router.route('/deletestaff/:id').delete(deleteStaff);

module.exports = router;
