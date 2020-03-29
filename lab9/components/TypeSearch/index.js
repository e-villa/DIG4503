import typestyles from '../type.module.css';

class TypeSearch extends React.Component {

  getType(event) {

  event.preventDefault();

  let element = document.querySelector("#typeList");

  fetch("/api/pokemon/type/" + element.value)
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
                <h2 className= {typestyles.header}>Pokemon Type</h2>
                <form onSubmit={this.getType}>
                   <input id="typeList" type="text" placeholder="PokemonType" />
                   <button>Submit</button>
               </form>
           </div>
       );
   }
}

export default TypeSearch;
