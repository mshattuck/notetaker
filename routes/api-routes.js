//dependencies
const fs = require("fs");
let allNotes = require('../db/db.json');

module.exports = (app) =>
{
    //retreive all notes
    app.get('/api/notes', (req,res) =>
    {
        console.log("Loading all notes");
        res.json(allNotes);
    });

    //create a new note
    app.post('/api/notes', (req, res) =>
    {
        //create new note object with properties from the html body
        const note = req.body;

                console.log("new note object: ",note);

        //variable to get the last note id
        let lastid = 0;

        //iterates through the id property in allNotes, sets it to the highest until equal
        for (let i in allNotes)
        {
                    console.log("note[i].id:",allNotes[i].id);

            let id = allNotes[i].id;
                    
            //sets the value to the id of the note in the array until it is equal to the highest note.id value
            if (id > lastid)
            {
                lastid = id;
            }
        };
            console.log("lastid: ",lastid);
            console.log("note.id: ",note.id);

        //increments and sets the new notes' id and adds it to the allNotes
        note.id = lastid + 1;
        allNotes.push(note);

        //adds it to the allNotes array in the db.json file
        fs.writeFile("db/db.json", JSON.stringify(allNotes), function(err) 
        { 
            if(err){return console.log(err);} 
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