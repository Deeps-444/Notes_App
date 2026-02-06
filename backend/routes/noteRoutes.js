const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

//create new note
router.post("/add", async (req, res) => {
    try{
        const { title, content } = req.body;
        const newNote = new Note({
            title,
            content,
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({message: "Failed to create note"});
    }
});

//get all notes
router.get("/", async (req, res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({message: "Failed to fetch notes"});
    }
});

module.exports = router;