const Patient = require('../models/patientModel');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

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
      newName: patient.firstName,
      newAge: patient.age,
      newUpdatedDate: patient.updatedAt,
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
    const patients = await Patient.aggregate([
      {
        $lookup: {
          from: 'prescriptions',
          let: { patientId: '$_id' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [{ $eq: ['$id', '$$patientId'] }],
                },
              },
            },
            {
              $sort: {
                date: -1,
              },
            },
          ],
          as: 'prescription',
        },
      },
    ])
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log(patients);
    const data = patients.map((patient) => ({
      patientName: patient.firstName + ' ' + patient.lastName,
      patientAge: patient.age,
      bloodGroup: patient.bloodGroup,
      sex: patient.gender,
      birthDate: patient.birthday,
      phoneNumber: patient.phone,
      email: patient.email,
      maritalStatus: patient.maritalStatus,
      patientPrescription: patient.prescription,
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
