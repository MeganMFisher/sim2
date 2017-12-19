const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const user_controller = require('./controllers/user_controller')
const property_controller = require('./controllers/property_controller')
require('dotenv').config();

const app = express();

massive( process.env.CONNECTIONSTRING ).then( dbInstance => {
  app.set('db', dbInstance);
})




app.use(express.static(`${__dirname}/../build`) );

// AUTH ENDPOINTS
app.post('/api/auth/login', user_controller.login);
app.post('/api/auth/register', user_controller.register);
app.post('/api/auth/logout', user_controller.logout);


 
// PROPERTY ENDPOINTS
app.post('/api/properties/', property_controller.create);
app.get('/api/properties/',  property_controller.readAll);
app.delete('/api/properties/:id', property_controller.delete);
app.get('/api/properties/filter', property_controller.filter);


app.listen( process.env.PORT, () => { console.log(`Server listening on port ${ process.env.PORT}`); } );