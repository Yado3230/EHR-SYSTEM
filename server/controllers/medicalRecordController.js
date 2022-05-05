const MedicalRecord = require('../models/medicalRecordModel');

exports.getAllMedicalRecords = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'limit', 'fields', 'age'];
    excludedFields.forEach((el) => delete queryObj[el]);
    const medicalRecords = await MedicalRecord.find(queryObj);
    res.status(200).json({
      status: 'success',
      data: {
        medicalRecords,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        medicalRecord,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = await MedicalRecord.findOne({
      _id: req.params.id,
    })
      .populate({
        path: 'patient',
        select: 'patientName',
      })
      .populate({
        path: 'doctor',
        select: 'name',
      });
    res.status(200).json({
      status: 'success',
      data: {
        medicalRecord,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
