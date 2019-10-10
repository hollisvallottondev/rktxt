const graphql = require('graphql'); 
const NoteVersionType = require('../types/note-version'); 
const NoteVersion = require('../../models/NoteVersion'); 

const {
    GraphQLID, 
    GraphQLList
} = graphql; 

const noteversion = {
    type: NoteVersionType,
    //argument passed by the user while making the query
    args: { id: { type: GraphQLID } },
    resolve: (parent, args) => {
        //Here we define how to get data from database source
        //this will return the book with id passed in argument 
        //by the user
        const { id } = args; 
        return NoteVersion.find( { id } ); 
    }
}

const noteversions = {
    type: new GraphQLList(NoteVersionType),
    resolve: (parent, args) => {
        return NoteVersion.find(); 
    }
}

module.exports = {
    noteversion,
    noteversions
}
