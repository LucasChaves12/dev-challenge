const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");

const server = express();

// Middleware
server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes);

module.exports = server;
