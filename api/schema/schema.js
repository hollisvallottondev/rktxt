const graphql = require('graphql');
const mutations = require('./mutations'); 
const rootQueries = require('./queries'); 

const { 
    GraphQLObjectType, 
    GraphQLSchema
} = graphql;

//Schema defines data on the Graph like object types(book type), relation between 
//these object types and describes how it can reach into the graph to interact with 
//the data to retrieve or mutate the data   

//RootQuery describe how users can use the graph and grab data.
//E.g Root query to get all authors, get all books, get a particular 
//book or get a particular author.
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => (rootQueries)
});

const RootMutationType = new GraphQLObjectType({
    name: "RootMutationType", 
    description: 'Root mutation type',
    fields: () => (mutations)
})

//Creating a new GraphQL Schema, with options query which defines query 
//we will allow users to use when they are making request.
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
});