const Express = require("express");
const App = Express();
const port = 80;

App.get("/", function(req,res)){

}
App.use(Express.static("static"));

App.listen(port,()=>{
   console.log("Server running!");

});
App.use("/anotherFolder", Express.static("anotherFolder"));

App.get("/api",function(req,res)){
    res.send("Hi!")
});

App.get('/', function(request, response) {
        response.send("Hello World!");
});
//Listens to designated port   send the terminal a message when the server is started
App.listen(port, function(){
        console.log("Server running!");
});
