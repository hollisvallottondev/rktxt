const graphql = require('graphql'); 
const NoteType = require('../types/note'); 
const Note = require('../../models/Note'); 

const {
    GraphQLID,
    GraphQLList
} = graphql; 

const note = {
    type: NoteType,
    args: { id: { type: GraphQLID } },
    resolve: (parent, args) => {
        const { id } = args; 
        const note = Note.find({ id }); 
        return note || "No note with that id does not exist"
    }
}

const notes = {
    type: new GraphQLList(NoteType),
    resolve: (parent, args) => {
        return Note.find(); 
    }
}


module.exports = {
    note, 
    notes
}
