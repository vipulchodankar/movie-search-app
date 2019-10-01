const express = require("express");
const request = require("request");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the movie search app!");
});

app.get("/results", (req, res) => {
  res.send("Results Route!");
});

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Movie Search App running at http://localhost:${PORT}/`);
});
