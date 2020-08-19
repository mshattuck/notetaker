//dependencies
const fs = require("fs");
let allNotes = require('../db/db.json');

module.exports = (app) =>
{
    //retreive all notes
    app.get('/api/notes', (req,res) =>
    {
        res.json(allNotes);
    });

    app.post('/api/notes', (req, res) =>
    {
        //object with elements of the note
        const note = req.body;

        //to get the top note id
        let topMost = 0;

        //checks the highest id number
        for (let i in notes)
        {
            let id = notes[i].id;
            if (id > topMost)
            {
                topMost = id;
            }
        };

        //sets the note's id number to the next highest
        note.id = topMost + 1;
        //adds the note to the notes
        allNotes.push(note);

        fs.writeFile("db/db.json", JSON.stringify(notes), function(err) {

        });


    });

    //get single note
    app.get("/api/notes/:id", (req,res) => 
    {


    });

    app.delete("/api/notes/:id", (req,res) => 
    {


    });


}