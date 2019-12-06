const NoteType  = require('../types/note'); 
const Note = require('../../models/Note'); 
const NoteVersion = require('../../models/NoteVersion'); 

const graphql = require('graphql');

const { 
    GraphQLString, 
    GraphQLID, 
    GraphQLNonNull 
} = graphql;


const addNote = {
    type: NoteType ,
    description: 'Add a note',
    args:{
        authorId: { type: GraphQLNonNull(GraphQLID) },
        text: { type: GraphQLString },
    },
    resolve: (parent, args) => {
        const { authorId, text } = args; 
        const note = new Note({ authorId });
        note.save(); 
        const noteversion = new NoteVersion({ text, noteId: note._id }); 
        noteversion.save(); 
        return note; 
    }
}

const updateNote = {
    type: NoteType ,
    description: 'Update a note',
    args:{
        noteId: { type: GraphQLNonNull(GraphQLID) },
        text: { type: GraphQLString },
    },
    resolve: (parent, args) => {
        const { noteId, text } = args; 
        const noteversion = new NoteVersion({ text, noteId }); 
        noteversion.save(); 
        return Note.findOne({ _id: noteId }).then( res => {
            return res;
        }); 
    }
}

module.exports = {
    addNote, 
    updateNote
}