const graphql = require('graphql');
const Author = require('../../models/Author'); 
const AuthorType = require('../types/author');

const { GraphQLID, GraphQLList } = graphql; 

const author = {
    type: AuthorType,
    args: { id: { type: GraphQLID } },
    resolve: ( parent, args ) => {
        const { id } = args; 
        return Author.find({ id }); 
    },
    notes: ( parent, args ) => {
        const { id } = args;
        console.log('looking for notes', id);
        return Notes.find( {authorId: id }); 
    }
} 

const authors = {
    type: new GraphQLList(AuthorType),
    resolve: (parent, args) => {
        return Author.find(); 
    }
}

module.exports = {
    author, 
    authors
}