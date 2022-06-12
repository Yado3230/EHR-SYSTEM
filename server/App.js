const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const prescriptionRouter = require('./routes/prescriptionRouter');
const patientRouter = require('./routes/patientRouter');
const userRouter = require('./routes/userRouter');
const medicalRecordRouter = require('./routes/medicalRecordRouter');
const insuranceRouter = require('./routes/insuranceRouter');
const diagnoseRouter = require('./routes/diagnoseRouter');
const staffRouter = require('./routes/staffRouter');
const appointmentRouter = require('./routes/appointmentRouter');
const hospitalRouter = require('./routes/hospitalRouter');

const app = express();
//
//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
// app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

app.use('/api/system/patients', patientRouter);
app.use('/api/system/hospitals', hospitalRouter);
app.use('/api/system/prescriptions', prescriptionRouter);
app.use('/api/auth', userRouter);
app.use('/api/system/medicalrecords', medicalRecordRouter);
app.use('/api/system/insurances', insuranceRouter);
app.use('/api/system/diagnosis', diagnoseRouter);
app.use('/api/system/staffs', staffRouter);
app.use('/api/system/appointment', appointmentRouter);

module.exports = app;

//consider the class
//at least two patient management
//collecting data from every database
