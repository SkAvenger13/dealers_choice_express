const express = require('express');

const songsRouter = require('./routers/songs');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({server: 'working'});
});

server.use('/')

module.exports = server;