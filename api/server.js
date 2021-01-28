const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

const AccountRouter = require('./accounts/accounts-router')

server.use(express.json());
server.use('/accounts',AccountRouter);

module.exports = server;
