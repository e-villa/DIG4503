import React from 'react';
import NameSearch from './components/NameSearch/';
import TableOne from './components/TableOne';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "table": []
    };
  }

  exampleFunction(results) => {
    
    this.setState({
      "table":results
    });
    //console.log(results);//"See? I can call this!");
  }

  render() {
    return(
      <div>
      <h2>Search:</h2>
      <NameSearch callback ={this.exampleFunction} />
      <TableOne table={this.state.table} />
      </div>
    )
  }
}
  export default App;
  //review
  //setstate of class components and is how you change the state and will change and rerender the data internally
  //change the data and change the render
//objects in javascript can contain functions & properties
//elements+attributes => object + Properties
//this.props is all of the attributes equal to elements
//parent(app.js) and their child(NameSearch) + child(TableOne). children cant talk to one another
//but can talk to their parents
//values can be functions likw const value = function(){};
//pass values down (parents to child.. pass as properties and pass);call functions up (from child to parent)
/*
  movieSearch() {

    let inputElement = document.querySelector("#movieInput");

    let inputValue = inputElement.value;

    if(inputValue.length === 0) {
      inputValue = "@";
    }

    fetch("http://localhost:80/movies/title/" + inputValue)
    .then((response) => {return response.json(); })
    .then((processed) => {
      console.log(processed);
    });

  }

  render() {

    return (
      <div>
        <input type="text" id="movieInput" onKeyUp={this.movieSearch} />
      </div>
    );

  }


}

export default App;
*/
