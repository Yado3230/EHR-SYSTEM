const express = require('express');
const patientController = require('../controllers/patientController');
const {
  getAllPatients,
  makeAPIforDataWhereHouse,
  join,
  warehouse,
  createPatient,
  deletePatient,
  updatePatient,
} = patientController;
const authController = require('./../controllers/authController');
const { protect, restrictTo } = authController;
const router = express.Router();

router
  .route('/')
  .get(protect, restrictTo('receptionist', 'doctor', 'admin'), getAllPatients)
  .post(protect, restrictTo('receptionist'), createPatient);
router.route('/joined').get(join);
router.route('/warehouse').get(warehouse);
router.route('/deletepatient/:id').delete(deletePatient);
router.route('/updatepatient/:id').patch(updatePatient);
router.route('/patient-record/information').get(makeAPIforDataWhereHouse);

module.exports = router;
