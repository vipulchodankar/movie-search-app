const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("search");
});

app.get("/results", (req, res) => {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=8623c884";
  request(url, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render("results", {
        data: data
      });
    }
  });
});

const port = process.env.PORT || 6969;

app.listen(port, () => {
  console.log(`Movie Search App running at http://localhost:${port}/`);
});
