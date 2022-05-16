const express = require('express');

const appoinmentController = require('../controllers/appointmentController');
const { getAllAppointments, createAppointment } = appoinmentController;
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('receptionist'), getAllAppointments)
  .post(protect, restrictTo('receptionist'), createAppointment);

module.exports = router;
