const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const mongooseCredentials = require('../credentials/mongoose');
const server = express();

mongoose.connect(`mongodb+srv://${mongooseCredentials.username}:${mongooseCredentials.password}@cluster0-do2no.mongodb.net/tindev?retryWrites=true&w=majority`, {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);
server.listen(3333);