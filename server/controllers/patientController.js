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
exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    res.status(204).json({
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
      patientName: patient.name,
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
