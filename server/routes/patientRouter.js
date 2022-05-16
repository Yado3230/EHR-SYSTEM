const express = require('express');
const patientController = require('../controllers/patientController');
const { getAllPatients, makeAPIforDataWhereHouse, join, createPatient } =
  patientController;
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;
// const userController = require('../controllers/userControllers');
// const { protect, restrictTo } = userController;

const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('receptionist'), getAllPatients)
  .post(protect, restrictTo('receptionist'), createPatient);
router.route('/joined').get(join);
router.route('/patient-record/information').get(makeAPIforDataWhereHouse);

module.exports = router;
