const chalk = require("chalk");

class Person {
   constructor(name,favoriteColor){
     this.name  = name;
     this.favoriteColor = favoriteColor;
     //creating properties in the constructor by using this
     //then we pass them as arguments
   }
speak(){
  //console.log("Hi, my name is"  + " " + this.name + ".");
  console.log("Hi, my name is"  + " " + chalk.keyword(this.favoriteColor)(this.name) + ".");
  }

}

module.exports = Person;
//nodes module. exports and transfer to another file using rwqurie
