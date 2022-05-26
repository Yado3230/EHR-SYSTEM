const express = require('express');

const appoinmentController = require('../controllers/appointmentController');
const { getAllAppointments, createAppointment } = appoinmentController;
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;

const router = express.Router();

router
  .route('/')
  .get(
    protect,
    restrictTo('receptionist', 'admin', 'doctor'),
    getAllAppointments
  )
  .post(
    protect,
    restrictTo('receptionist', 'admin', 'doctor'),
    createAppointment
  );

module.exports = router;
