const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const user_controller = require('./controllers/user_controller')
const property_controller = require('./controllers/property_controller')
require('dotenv').config();

const app = express();

massive( process.env.CONNECTIONSTRING ).then( dbInstance => {
  app.set('db', dbInstance);
}).catch( err => console.log('Error connecting to database:', err) );


//MIDDLEWARE
app.use( bodyParser.json() );
app.use( cors() );
app.use( session({
  secret: '@ny7h1ng y0u w@n7',
  resave: false,
  saveUninitialized: false
}));
app.use( require(`./middlewares/auth`) );
app.use( express.static(`${__dirname}/../build`) );


//ENDPOINTS
app.post('/api/auth/login', user_controller.login);
app.post('/api/auth/register', user_controller.register);
app.post('/api/auth/logout', user_controller.logout);


app.post('/api/properties/', property_controller.create);
app.get('/api/properties/', property_controller.readAll);
app.delete('/api/properties/:id', property_controller.delete);
app.get('/api/properties/filter', property_controller.filter);

// app.get('*', ( req, res, next ) => {
//   res.sendFile( path.resolve('../build/index.html') );
// });

app.listen( process.env.PORT, () => { console.log(`Server listening on port ${ process.env.PORT}`); } );