const express = require("express");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "*",
  allowedHeaders: "*",
  optionsSuccessStatus: 200,
  method: "GET ,HEAD ,PUT ,PATCH, POST, DELETE, OPTIONS",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Welcome to fullstack backend test!");
});

require("./routes/main.routes")(app);

module.exports = app;
