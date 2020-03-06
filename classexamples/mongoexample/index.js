const MongoClient = require("mongoDB").MongoClient;
const URL = "mongodb+srv://emelyvilla:bzmpz0JwGK2CBwIW@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection) {

    if(error){
        throw error;
    }

    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");

    //let result =
    collection.findOne({
        "score" = 79
      },{},(error, result) => {
        console.log(result);
      });
      //or make promises like the example below instead of callback
    /*}).then((result)=>{
       console.log(result);
    });*/

  //  console.log(result);

    connection.close();

});
