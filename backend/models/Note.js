const mongoose = require("mongoose");
//defining note schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  },
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
