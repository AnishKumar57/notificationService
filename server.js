const express = require('express');
const app = express();
const {PORT} = require('./config/server.config');
const {db_uri}= require('./config/db.config');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/ticketNotification.routes');
const bodyParser = require('body-parser');





//const PORT= 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

notificationRoutes(app);

// Starting the app to listen to the givne port
app.listen(PORT, ()=> {
    console.log("Applicaion is listening to port ", PORT);

    // connect mongoose with mongodb
    mongoose.connect(db_uri);

    // verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });


});


// function sendMail() {
// const msg = {
//   to: EMAIL_ADDRESS, // Change to your recipient
//   from: EMAIL_ADDRESS, // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sendGridMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   });
// };