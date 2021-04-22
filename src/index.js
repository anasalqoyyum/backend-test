const env = require('dotenv').config().parsed
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to fullstack backend test!");
});

app.listen(env.PORT, () => {
  console.log(`This app listening on port ${env.PORT}!`);
});