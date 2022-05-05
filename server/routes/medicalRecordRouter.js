const express = require('express');
const medicalRecordController = require('./../controllers/medicalRecordController');
const { getAllMedicalRecords, createMedicalRecord, getMedicalRecord } =
  medicalRecordController;
const router = express.Router();
router.route('/').get(getAllMedicalRecords).post(createMedicalRecord);
router.route('/:id').get(getMedicalRecord);
module.exports = router;
