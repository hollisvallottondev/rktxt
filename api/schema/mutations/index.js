const fs = require('fs');
const noteMutations = require('./note'); 
const authorMutations = require('./author'); 

module.exports = {
    ...noteMutations,
    ...authorMutations
}


