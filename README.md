# Create the Database

* cd into `private/db`.
* Open `initialize_db.sql`.
* Run the commands inside that file.

# Create the ignored config.js

* cd into `private/`.
* Create a `config.js` file.
* Using `module.exports`, export an object with the following properties:
  * `connectionString`: This should point to the `properties` database.
    * <details>
    
      <summary> <code> Example </code> </summary>
      
      ```js
      module.exports =  {
        connectionString: "postgres://jameslemire:9829@localhost/properties"
      };
      ```
      
      </details>

# Development

* cd into `private/`.
* Run `npm install`.
* Run `nodemon` || `node index.js`.
* cd into `public/`.
* Run `npm install`.
* Run `npm start` and press `enter` on the prompt.

# Production

* cd into `private/`.
* Run `npm install`.
* Run `nodemon` || `node index.js`.
* Go to `http://localhost:3000/` in a browser.