# Backend: 

## Setup: 

* In your .env file you will need to add a CONNECTIONSTRING to your db and a PORT. 

* Your frontend is being served up by the backend so you only need to run nodemon after you npm install.

## Create database tables: 

* In the initialize_db.sql file you will need to add the Users table and the Properties table. 

* The Users table will need three columns. A UserId which has an unique key as the datatype, and Username and Password columns will both have a character datatype. The Username column should only accept unique values. 

* The Properties table will need a PropertyId column which has a unique key as the dataype. A UserId column with a numeric datatype. The Name, Description, Address, City, State, Zip, and Image columns all will need a character datatype. The Loan, MonthlyMortgage, DesiredRent, and RecommenedRent columns all need a numeric datatype that holds decimals. Last you will need to add in a foreign key that references the Users table. 

* Once you have created your tables be sure to copy them into your sql Tabs to create them in your actual database.

## Middleware

* Add in body-parser. 
* Add in cors.
* Add in sessions. 


## Custom Middleware 

* In the middlewares folder go into the auth.js file and create custom middleware within the module.exports. 

* You will need to check if there is a user on session if so move on to the next middleware if not res.send an object with authorized set to false.

* Require your custom middleware in the index.js and use it in each of the property endpoints as request level middleware.

# Frontend: 

## Redux 

### Store:

* Setup the store.js for redux. Be sure to use applyMiddleware and promiseMiddleware. 

### Index:

* Set up the index.js for redux.

### Reducer: 

* The reducer has been setup already so we will just be adding to it,

* Add three action types filter_properties, update_wizard, reset_wizard. 

* The filter_properties action creator needs to take in an amount, make an get request to '/api/properties/filter' sending a query where the key is `amount` and the value is the amount parameter passed into the action creator. The response from the db will be the payload. 

* The filter_properties case in the reducer needs to take into account that there is a promise in the action creator. Then return a new object changes just the properties key on state to equal the payload.

* The update_wizard action creator needs to take in an obj and put that object onto the payload. 

* The update_wizard case in the reducer needs to make a new copy of state into a newState variable. Then for loop over the payload object and assign newState.wizard[i] equal to the payload[i]. Then returns newState.

* Then reset_wizard action creator only needs a payload of null to reset the wizard object on state.

* The reset_wizard case in the reducer needs to make a new copy of state into a newState variable. Then for loop over the newState.wizard object and assign newState.wizard[i] = null. Then returns newState.


### Dashboard Component: 

* Needs to be able to access the users and properties on state in the reducer. 

* connect the logout, getProperties, deleteProperty, filterProperties action creators to the dashboard component. 

### Steps 1-4 Components: 

* Needs to be able to access wizard on state in the reducer. 

* Connect the updateWizard action creator to the components. 

* Be sure to update all four of the components for Steps 1-4 with these changes. 


### Step 5 Component: 

* Needs to be able to access wizard on state in the reducer.

* Connect the updateWizard, createProperty, resetWizard action creators to the component.

