const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteVersionSchema = new Schema({
    text: String,
    noteId: String
});

module.exports = mongoose.model('NoteVersion', noteVersionSchema);
