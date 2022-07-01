const express = require('express');
const colors = require('colors')
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 4000;

const app = express();

//connect to database
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

app.listen(port, console.log("Listening to port: "+ port));