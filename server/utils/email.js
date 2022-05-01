const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //create transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',

    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    //activate in gmail "less secure app" option
  });
  //define the email options
  const mailOptions = {
    from: 'EHR Management System Developer Group',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //send the email with nodemailer
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
