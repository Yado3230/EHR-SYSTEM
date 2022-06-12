const express = require('express');
const medicalRecordController = require('./../controllers/medicalRecordController');
const {
  getAllMedicalRecords,
  createMedicalRecord,
  getMedicalRecord,
  joinedData,
} = medicalRecordController;
const router = express.Router();
router.route('/').get(getAllMedicalRecords).post(createMedicalRecord);
router.route('/:id').get(getMedicalRecord);
router.route('/warehouserecords').get(joinedData);
module.exports = router;
