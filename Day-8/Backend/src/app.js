const express = require("express");
const noteModel = require("./models/note.model");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/notes", async (req, res)=>{
    const {title, desc} = req.body;

    const note = await noteModel.create({
        title,
        desc
    });

    res.status(201).json({
        message: "Note Created Successfully.",
        note
    })
});

app.get("/api/notes", async (req, res)=>{
    const notes = await noteModel.find();

    res.status(200).json({
        message: "Notes Fetched Successfully.",
        notes
    })
})

app.delete("/api/notes/:id", async (req, res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "Note Delete Successfully."
    })
})

app.patch("/api/notes/:id", async (req, res)=>{
    const id = req.params.id;
    const {desc} = req.body

    await noteModel.findByIdAndUpdate(id, {desc});

    res.status(200).json({
        message:"Note updated Successdully."
    })
})

module.exports = app;