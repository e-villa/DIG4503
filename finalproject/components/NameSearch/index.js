import namestyles from '../name.module.css';

class NameSearch extends React.Component {

           readName(event) {

           event.preventDefault();

           let element = document.querySelector("#name");

           fetch("/api/pokemon/name/" + element.value)
          .then((res) => {
               return res.json();
          })
          .then((processed) => {

               let reporting = document.querySelector("#reportingArea");

               if(processed.error) {
                   reporting.innerHTML = processed.error;
               }
               else {
                   reporting.innerHTML = processed.name;
               }

           });

       }

    render() {
        return(
            <div>
            <h2 className={namestyles.header}><span>Pokemon Name</span></h2>
              <form  className={namestyles.nameform} onSubmit={this.readName}>
                <input id="name" type="text" placeholder= "Pokemon Name"/>
                <button>Submit</button>
              </form>
            </div>
        );
    }
}

export default NameSearch;
