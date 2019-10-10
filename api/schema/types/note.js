const graphql = require('graphql');
const NoteVersionType = require('./note-version'); 
const NoteVersion = require('../../models/NoteVersion'); 

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull
} = graphql;

const NoteType = new GraphQLObjectType({
    name: "Note", 
    fields: () => ({
        id: { type: GraphQLID },
        authorId: { type: GraphQLID },
        author: {
            type: require('./author'),
            resolve: ( parent, args ) => {
                const { authorId } = parent; 
                return Author.findOne( {id: authorId } ); 
            }
        },
        latest: {
            type: NoteVersionType, 
            resolve: ( parent, args ) => {
                console.log('parent', parent)
                const noteId = parent.id; 
                console.log('noteId', noteId); 
                return NoteVersion.find( { noteId } ).then( res => {
                    const noteversions = res; 
                    const latest = noteversions[ noteversions.length - 1 ]; 
                    return latest; 
                })
                // NoteVersion.find( { noteId }, "", function( err, data) {
                //     const noteversions = data; 
                //     const latest = noteversions[ noteversions.length - 1 ]; 
                //     console.log('latest', latest); 
                //     res.send(latest); 
                // } );
            }
        },
        noteversions: {
            type: new GraphQLList( NoteVersionType ),
            resolve: ( parent, args ) => {
                const noteId = parent.id; 
                const noteversions = NoteVersion.find({ noteId }); 
                return noteversions; 
            }
        }
    }),
}); 


module.exports = NoteType

