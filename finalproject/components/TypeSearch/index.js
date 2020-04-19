import TypeResult from '../TypeResult';
import typestyles from '../type.module.css';

class TypeSearch extends React.Component {

    constructor (props) {
        super (props)

        this.state = {
            searchValue: "",
            result: []
        };
    }

    changeHandler(value) {
        this.setState(
            {
                searchValue: value
            }
        );
    }

    async clickHandler() {

      let searchValue = this.state.searchValue;

      if(searchValue === "") {
        searchValue = '~';
      }

      let response = await fetch('/api/pokemon/type/' + searchValue);
      let processed = await response.json();

      this.setState({result: processed});
    }

    render () {
      return (
        <div className={typestyles.typeform}>
      
          <p className={typestyles.p}><span>Search for Pokemon by Type Name!</span></p>
          <p className={typestyles.p}><span>Remember to capitalize the Pokemon type!</span></p>

          <input
            type="text"
            onChange={(event) => { this.changeHandler(event.target.value); } } />
          <button onClick={ () => { this.clickHandler() } } >Search</button>
            {
              this.state.result.map((pokemon, index) => {
                return (
                  <TypeResult pokemon={pokemon} number={index} />
                )
              })
            }
        </div>
      );
    }
}

export default TypeSearch;
