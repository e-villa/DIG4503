import pokemon from 'json-pokemon';

function response(req, res){

  let result = {"error": "Could not find name."};

  let type = req.query.typeList;

  for(let i = 0; i < pokemon.length; i++){

      for(let k = 0; k < pokemon[i].typeList.length; k++){
        if(pokemon[i].typeList[p] == req.query.pokeType){
                       result.push(pokemon[i]);
    }

  }
}
  res.json(result);
}

export default response;
