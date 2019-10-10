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
        console.log('args', args); 
        const author = new Author( args ); 
        console.log('author', author); 
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
    resolve: (parent, args) => {
        const { id } = args; 
        const author = Author.update( { _id: id }, { args }); 
        return author;
    }
}

module.exports = {
    addAuthor,
    updateAuthor
}