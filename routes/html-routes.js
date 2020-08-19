//dependencies
const path = require('path');

//supply routes for app
module.exports = (app) => 
{
    //brings up notes.html
    app.get('/notes', function(req, res)
    {
        console.log('getting note creation page');
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });


};