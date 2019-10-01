const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to the movie search app!");
});

app.get("/results", (req, res) => {
  request(
    "http://www.omdbapi.com/?s=avengers&apikey=8623c884",
    (err, response, body) => {
      if (!err && response.statusCode === 200) {
        const data = JSON.parse(body);
        res.render("results", {
          data: data
        });
      }
    }
  );
});

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => {
  console.log(`Movie Search App running at http://localhost:${PORT}/`);
});
