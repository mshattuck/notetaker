//dependencies
const fs = require("fs");
let allNotes = require('../db/db.json');

module.exports = (app) =>
{
    //retreive all notes
    app.get('/api/notes', (req,res) =>
    {
                console.log("getting all notes");
                
        res.json(allNotes);
    });

    app.post('/api/notes', (req, res) =>
    {
        //create new note object with properties from the html body
        const note = req.body;

                console.log("note: ",note);


        //to get the top note id
        let topMost = 0;

        //checks the highest id number, iterates over properties of 
        for (let i in allNotes)
        {
                    console.log("note[i].id:",allNotes[i].id);

            let id = allNotes[i].id;
                    

            if (id > topMost)
            {
                topMost = id;
            }
        };

        //sets the note's id number to the next highest
        note.id = topMost + 1;
        //adds the note to the notes
        allNotes.push(note);

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