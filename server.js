// Access to the express library by looking into node modules for express
const express = require('express');

// Create an instance of the express constructor
const app = express();

// Create an instance of body-parser in order to make a post request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

// Create a dynamic get route to pass variable through url which can be accessed through req.params

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    res.json({
        success: true,
        message: 'Got one user',
        user: req.params.id
    });
});

// Create a function to handle post request made to the login endpoint

app.post('/login', function(req, res) {

    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = req.body.username;
    const password = req.body.password;

    // This data should come from database
    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSecret';

    // Typically you should first check if the username exists, if yes then fetch the password to compare both
    if(username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method to make an encrpted token
        res.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token goes here'
        });
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        });
    }
});

// Start up your server locally on port 8000 as the first arguement

app.listen(8000, function() {
    console.log("Server is running");
});

