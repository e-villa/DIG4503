const Express = require("express");
const App = Express();
const port = 80;
const fs = require("fs");

const contents = fs.readFileSync("database.json");
let database = JSON.parse(contents);

const cors = require("cors");
App.use(cors());

App.get("/shows/name/:name,(req,res) => {

    let result = {"error": "Could not find name!"};

});

App.get("/shows/score/:score,(req,res) => {

  let result = {"error": "Could not find score!"};


});

App.get("/shows/episode/:episode,(req,res) => {

  let result = {"error": "Could not find episode!"};


});

App.listen(port, function() {
    console.log("Server running!");
});
