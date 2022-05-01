const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const prescriptionRouter = require('./routes/prescriptionRouter');
const patientRouter = require('./routes/patientRouter');
const userRouter = require('./routes/userRouter');
const medicalRecordRouter = require('./routes/medicalRecordRouter');
const insuranceRouter = require('./routes/insuranceRouter');
const diagnoseRouter = require('./routes/diagnoseRouter');

const app = express();

//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/system/patients', patientRouter);
app.use('/api/system/prescriptions', prescriptionRouter);
app.use('/api/auth', userRouter);
app.use('/api/medicalrecords', medicalRecordRouter);
app.use('/api/insurances', insuranceRouter);
app.use('/api/diagnosis', diagnoseRouter);

module.exports = app;

//consider the class
//at least two patient management
//collecting data from every database
