const nodemailer = require("nodemailer");
const {EMAIL_ADDRESS, EMAIL_PASSWORD,EMAIL_HOST} = require('../config/mailer.config');


const transporter = nodemailer.createTransport({
    pool: true,
    host: EMAIL_HOST,
    port: 465,
    secure: true, // use TLS
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    },
  });


const sendNotificationMail= (to, subject, text, html)=>{
  const message = {
      from: EMAIL_ADDRESS,
      to: to,
      subject: subject,
      text: text,
      html: html
    };
    transporter.sendMail(message,(err, info)=>{
      if(err){
        console.log("error", err);
      }else{
        console.log("info", info);
      }
    });
  }

  module.exports = {sendNotificationMail};





// // SendGrid code 
// const {EMAIL_ADDRESS, SENDGRID_API_KEY } = require('../config/mailer.config');
// const sendGridMail = require('@sendgrid/mail');
// sendGridMail.setApiKey(SENDGRID_API_KEY);


// module.exports = sendGridMail;


// // const msg = {
// //   to: EMAIL_ADDRESS, // Change to your recipient
// //   from: EMAIL_ADDRESS, // Change to your verified sender
// //   subject: 'Sending with SendGrid is Fun',
// //   text: 'and easy to do anywhere, even with Node.js',
// //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// // }
// // sendGridMail
// //   .send(msg)
// //   .then(() => {
// //     console.log('Email sent')
// //   })
// //   .catch((error) => {
// //     console.error(error)
// //   })


  
