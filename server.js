// Access to the express library by looking into node modules for express
const express = require('express');

// Create an instance of the express constructor
const app = express();

// Start up your server locally on port 8000 as the first arguement

app.listen(8000, function() {
    console.log("Server is running");
});

