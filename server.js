//dependancies
const express = require('express');
const note = express();

//port to use with code for Heroku
const port = process.env.port || 8080;

//parse incoming requests
note.use(express.json());

//serve the images, css, and JS files
note.use(express.static('public'));

//URL parser for nested objects
note.use(express.urlencoded({extended: true}));

//set up port for listening
note.listen(port, () => 
{
    console.log('note app listening on port: ' + port);
});

