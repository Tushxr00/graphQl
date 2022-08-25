const express = require('express')
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose");

const app = express()

const url = "mongodb+srv://Duke_Blaze01:dragon123@cluster0.l389qd2.mongodb.net/test"

mongoose.connect(url)
mongoose.connection.once("open", () => {
    console.log("connected to the databse successfully ")
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("mow listening for port 4000 ... ")
})