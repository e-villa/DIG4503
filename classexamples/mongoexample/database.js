const MongoClient = require("mongoDB").MongoClient;
const URL = "mongodb+srv://emelyvilla:bzmpz0JwGK2CBwIW@cluster0-tc9sb.mongodb.net/";


class Database {
  constructor() {

    this.collection = null;
    this.connection = null;

    MongoClient.connect(URL, (error, connection) => {

        if(error){
            throw error;
        }

        this.connection = connection;

        let database = connection.db("DIG4503-78");
        //this refers to the inside of the function but w the error would mean it would refer to the class
        this.collection = database.collection("Movies");


      //  console.log(result);

    });

  }
    findScore(score){

      if(this.collection != null){
      this.collection.findOne({
            "score" : 79
          },{},(error, result) => {
            return result;
          });
        } else {
            return null;
        }
    }
}

module.exports = Database;



//let result =
/* ************ CALLBACK function  collection.findOne({
    "score" = 79
  },{},(error, result) => {
    console.log(result);
  });
  //or make promises like the example below instead of callback
/*}).then((result)=>{
   console.log(result);
});*/
