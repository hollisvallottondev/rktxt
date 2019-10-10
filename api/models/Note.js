const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    authorId: String
});

module.exports = mongoose.model('Note', noteSchema);
