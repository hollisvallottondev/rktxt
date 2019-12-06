const express = require('express');
const expressGraphQl = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/schema')

const app = express().use("*",cors());


const mongoose = require('mongoose');

const Author = require('./models/Author');

mongoose.connect(`mongodb+srv://hollisv:${process.env.MONGO_ATLAS_PW}@cluster0-nihbc.mongodb.net/test?retryWrites=true&w=majority`);

mongoose.connection.once('open', () => {
    console.log('Connected');
});



// //This route will be used as an endpoint to interact with Graphql, 
// //All queries will go through this route. 
app.use('/graphql', expressGraphQl({
    //directing express-graphql to use this schema to map out the graph 
    schema,
    //directing express-graphql to use graphiql when goto '/graphql' address in the browser
    //which provides an interface to make GraphQl queries
    graphiql: true
}));

app.listen(3001, () => {
    console.log('Listening on port 3001');
}); 