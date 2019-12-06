const graphql = require('graphql');
const Note = require('../../models/Note'); 
const NoteType = require('./note'); 

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLList, 
} = graphql;

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        notes:{
            type: new GraphQLList( NoteType ),
            resolve: (parent,args) => {
                const { id } = parent;
                return Note.find( { authorId: id } ); 
            }
        }
    })
})

module.exports = AuthorType
