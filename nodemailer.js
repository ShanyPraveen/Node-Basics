var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shanypraveen@gmail.com',
    pass: 'xzSutlej'
  }
});

var mailOptions = {
  from: 'shanypraveen@gmail.com',
  to: 'hellochristylaura@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Hey Laura</h1><p>How are You</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});