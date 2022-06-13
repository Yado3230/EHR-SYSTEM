const Patient = require('../models/patientModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const MedicalRecord = require('../models/medicalRecordModel');

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      status: 'success',
      patients,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deletePatient = async (req, res) => {
  try {
    const result = await Patient.findById(req.params.id);
    const patient = await Patient.findByIdAndDelete(req.params.id);
    const user = await User.findOneAndDelete({ email: result.email });
    res.status(204).json({
      status: 'success',
      patient,
      user,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      patient,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createPatient = async (req, res) => {
  try {
    const patients = await Patient.create(req.body);
    const newUser = await User.create(req.body);
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(201).json({
      status: 'success',
      message: 'Successfully Registered',
      token,
      data: {
        patients,
      },
      userdata: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.makeAPIforDataWhereHouse = async (req, res) => {
  try {
    const patients = await Patient.find();
    console.log(patients);
    const data = patients.map((patient) => ({
      newName: patient.name,
      newAge: patient.age,
      Email: patient.hospitalEmail,
      newUpdatedDate: patient.updatedAt,
      patientID: patient._id,
    }));
    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.join = async (req, res) => {
  try {
    const records = await MedicalRecord.aggregate([
      {
        $lookup: {
          from: 'prescriptions',
          localField: 'patient',
          foreignField: 'patient',
          as: 'prescription',
        },
      },
    ]);

    const populated = await MedicalRecord.populate(records, {
      path: 'patient',
      select: 'name bloodGroup birthday age gender phone email address',
    });
    const medicalrecord = await MedicalRecord.populate(populated, {
      path: 'doctor',
      select: 'name phone email address',
    });
    const medicalrecords = await MedicalRecord.populate(medicalrecord, {
      path: 'hospital',
      select: 'hospitalName contactNumber email address registeredAt',
    });
    res.status(200).json({
      status: 'success',
      data: {
        medicalrecords,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.warehouse = async (req, res) => {
  try {
    const patient = Patient.aggregate([
      {
        $match: {
          $and: [
            {
              registeredAt: {
                $gte: ISODate('2021-01-05T12:29:30.000+00:00'),
              },
            },
            {
              registeredAt: {
                $lte: ISODate('2022-05-22T12:29:30.000+00:00'),
              },
            },
          ],
        },
      },
      // {
      //   $addFields: {
      //     uniqueHour: {
      //       $dateToString: {
      //         format: '%Y-%m-%d-%H',
      //         date: '$createdAt',
      //       },
      //     },
      //   },
      // },
    ])
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(200).json({
      status: 'success',
      data: {
        patient,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
