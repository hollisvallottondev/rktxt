const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLNonNull, 
    GraphQLString
} = graphql;

const NoteVersionType = new GraphQLObjectType({
    name: "Version",
    fields: () => ({
        id: { type: GraphQLID  },
        text: { type: GraphQLString },
        noteId: { type: GraphQLID }
    })
})

module.exports = NoteVersionType