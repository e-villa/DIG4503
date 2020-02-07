const Express = require("express");
const App = Express();
const port = 80;

const chalk = require("chalk");
const pokemon = require('json-pokemon');

//localhost/id/#id
App.get("/id/:id", function(req, res) {
  let result = {"error": "Could not find that id! Sorry! :c"};

        pokemon.forEach((value) => {
            if(value.id == req.params.id) {
                result = value;
            }
        });

        if(result.error) {
            // In red
            console.log(chalk.red(req.path));
        } else {
            // In green
            console.log(chalk.green(req.path));
        }

       res.send(result);
});

/*localhost/name/"nameofPokemon"
which the name of the pokemon can be found either capitalized or lowercase
*/
App.get("/name/:name", function(req, res) {
  let result = {"error": "Could not find that name! Sorry! :c"};

        pokemon.forEach((value) => {
            if(value.name == req.params.name || value.name.toLowerCase() == req.params.name ) {
                result = value;
            }
        });

        if(result.error) {
            // In red
            console.log(chalk.red(req.path));
        } else {
            // In green
            console.log(chalk.green(req.path));
        }

         res.send(result);
});

App.listen(port, function() {
    console.log("Server running!");
});
