const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const {sendBasicEmail} = require('./services/email-service');
// const TicketController = require('./controllers/ticket-controller');
// const EmailService = require('./services/email-service');

const jobs = require('./utils/jobs');

const setUpAndStartServer = () => {

  // create an express app
  const app = express();

  // middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

 
  // Listen to the root endpoint
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    jobs()
    // send email
    sendBasicEmail(    
      'support@noti.com',
      'metaversewebo@gmail.com',
      'This is a testing Email', 
      'Hey, how are you? I hope you like this email.'
    )
  })
}
setUpAndStartServer()