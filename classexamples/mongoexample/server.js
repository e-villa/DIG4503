const Express = require('express');
const App = Express();
const port = 80;
const Database = require("./database.js");

let database = new Database();

App.get("/movies/name/:name", (req, res) => {

});

App.get("/movies/score/:score", (req, res) => {
  let result = {"error":"Could not find!"};

  let movie = database.findScore(req.param.score);

  if(movie != null) {
    result = movie;
  }

  res.json(result);
});

App.listen(port,() => {
   console.log("Server is running!")
});
