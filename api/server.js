const express = require('express'); //importing a CommonJS module
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan'); //for logging middleware
const server = express(); //creates the server
//
//global middleware
server.use(express.json()); //middleware needed to parse JSON
server.use(helmet()); //middleware that adds a layer of security to the server
server.use(cors()); //middleware that allows cross domain communication from the browser
server.use(morgan('tiny')); //logger middleware

//Router Imports
const authRouter = require('../routers/auth-router.js');
const marketRouter = require('../routers/market-router.js');
const villagersRouter = require('../routers/villagers-router.js');

//endpoints
server.get('/', (req, res) => {
  res.status(200).json({
    welcome: `to the danger zone!`,
    // environment: process.env.NODE_ENV
  });
});

//routes with Auth applied
server.use('/api/auth', authRouter);
server.use('/api/villagers', villagersRouter);
server.use('/api/market', marketRouter);

module.exports = server;
