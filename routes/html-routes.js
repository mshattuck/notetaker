//dependencies
const path = require('path');

//supply routes for app
module.exports = (app) => 
{
    //brings up notes.html
    app.get('/notes', function(req, res)
    {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //default route if not found
    app.get('*', (req,res) => 
    {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

};