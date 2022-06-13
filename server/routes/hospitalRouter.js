const express = require('express');
const hospitalController = require('./../controllers/hospitalController');
const { getAllHospitals, createHospital, getHospital } = hospitalController;
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;
const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('receptionist', 'admin'), getAllHospitals)
  .post(protect, restrictTo('receptionist', 'admin'), createHospital);
router.route('/:email').get(getHospital);
module.exports = router;
