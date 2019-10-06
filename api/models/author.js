const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types; 

const authorSchema = Schema({
    name: String
});

module.exports = mongoose.model('Author', authorSchema);