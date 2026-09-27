const express = require("express");
const configureApp = require("./settings/config.js");

const app = express();

app.use(express.json());

configureApp(app);

module.exports = app;