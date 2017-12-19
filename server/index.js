const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const user_controller = require('./controllers/user_controller')
const property_controller = require('./controllers/property_controller')
const auth = require(`./middlewares/auth`);
require('dotenv').config();

const app = express();

massive( process.env.CONNECTIONSTRING ).then( dbInstance => {
  app.set('db', dbInstance);
  //Sets up tables in DB for you.
  app.get('db').initialize_db().then(response => {
      console.log(response)
  })
})


//MIDDLEWARE
app.use( bodyParser.json() );
app.use( cors() );

app.use( session({
  secret: '@ny7h1ng y0u w@n7',
  resave: false,
  saveUninitialized: false
}));

app.use( express.static(`${__dirname}/../build`) );


// LOGIN ENDPOINTS
app.post('/api/auth/login', user_controller.login);
app.post('/api/auth/register', user_controller.register);
app.post('/api/auth/logout', user_controller.logout);

// PROPERTY LISTINGS ENDPOINTS
app.post('/api/properties/', auth, property_controller.create);
app.get('/api/properties/', auth, property_controller.readAll);
app.delete('/api/properties/:id', auth, property_controller.delete);
app.get('/api/properties/filter', auth, property_controller.filter);

app.listen( process.env.PORT, () => { console.log(`Server listening on port ${ process.env.PORT}`); } );