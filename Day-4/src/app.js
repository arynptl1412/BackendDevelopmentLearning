/*
    server ko create karna iska kaam h aur
    server ko config karna bhi iska kaam h
*/

const express = require("express");

const app = express(); // server create ho jata h isse

app.use(express.json())

const notes = [];

app.get("/", (req, res)=>{
    res.send("Hello World");
})

/*
    API method -> Post
    API name -> /notes
*/

app.post("/notes",(req, res)=>{
    notes.push(req.body);
    res.send("Note Created");
})

/*
    API method -> get
    API name -> /notes
*/

app.get('/notes', (req, res)=>{
    res.send(notes);
})

/*
    API method-> Delete
    API name -> /notes/:index
*/

app.delete("/notes/:index", (req, res)=>{
    delete notes[req.params.index];

    res.send("Note deleted.");
})

/*
    API method -> Patch
    API name -> /notes/:index

*/

app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].desc = req.body.desc;

    res.send("Note updates Successfully.")
})

module.exports = app; // isse aap chize export(bahar bhejna) kar sakte ho

