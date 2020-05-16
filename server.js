// Access to the express library by looking into node modules for express
const express = require('express');

// Create an instance of the express constructor
const app = express();

// Sample json data for mocking up in the server
const mockUserData = [
    { name: 'Mark' }, 
    { name: 'Henry' }
];

// Create a get request to get access to user's data on success

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got the users. Nice!',
        users: mockUserData
    });
});

// Create a param route to pass variable through url which can be accessed through req.params

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Got one user',
        user: req.params.id
    });
});

// Start up your server locally on port 8000 as the first arguement

app.listen(8000, function() {
    console.log("Server is running");
});

