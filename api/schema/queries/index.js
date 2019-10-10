const fs = require('fs');
const authorQueries = require('./author'); 
const noteVersionQueries = require('./note-version'); 
const noteQueries = require('./note'); 

module.exports = {
    ...authorQueries,
    ...noteVersionQueries,
    ...noteQueries
} 
