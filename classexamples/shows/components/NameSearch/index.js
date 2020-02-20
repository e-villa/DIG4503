import React from 'react';

class NameSearch extends React.Component {

      NameSearch(){

        let NameSearch = document.querySelector("#NameSearch");

        fetch("shows/name/" +  NameSearch.value)
        .then((res) => {
            res.json();
        })
        .then((processed) => {

        let namereport = document.querySelector("#namereport");

        if(processed.error){
          namereport.innerHTML = processed.error;
        } else{
          namereport.innerHTML = processed.error;
        }

        });
      }

     render() {
          return(
              <div>
                  <input id="" type= "text" onKeyDown={this.NameSearch} />

              </div>
          );
     }
}

export default NameSearch;
//onKeyDown stands for its own search session
