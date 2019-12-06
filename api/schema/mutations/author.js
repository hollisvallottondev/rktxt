const graphql = require('graphql'); 
const AuthorType = require('../types/author'); 
const Author = require('../../models/Author'); 
const {
    GraphQLID,
    GraphQLString, 
    GraphQLNonNull
} = graphql

const addAuthor = {
    type: AuthorType ,
    description: 'Add an author',
    args:{
        name: { type: GraphQLString },
    },
    resolve: (parent, args) => {
        const author = new Author( args ); 
        author.save(); 
        return author; 
    }
}

const updateAuthor = {
    type: AuthorType ,
    description: 'Update an author',
    args:{
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        const { id } = args; 
        return Author.update( { _id: id }, { ...args }).then( res => {
            return Author.findOne( { _id: id } ).then( author => author); 
        }); 
    }
}

module.exports = {
    addAuthor,
    updateAuthor
}