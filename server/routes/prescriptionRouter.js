const express = require('express');
const prescriptionController = require('../controllers/prescriptionController');
const { createPrescription, getAllPrescriptions } = prescriptionController;

const router = express.Router();
router.route('/').get(getAllPrescriptions).post(createPrescription);
router.route('/patient-record/information/joined');

module.exports = router;
