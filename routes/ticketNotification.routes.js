const ticketNotificationController = require('../controllers/ticketNotification.controller');



// to create a notification
module.exports = function(app){

    app.post('/notificationService/api/v1/notification', ticketNotificationController.createTicketNotification);

    
};