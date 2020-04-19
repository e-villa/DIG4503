import typestyles from '../type.module.css';


function TypeResult(props) {
    return (
        <div key={props.number}>
            <hr />
            <p className={typestyles.result}><strong>Name:</strong> {props.pokemon.name}</p>
            <p className={typestyles.result}><strong>ID:</strong> {props.pokemon.id}</p>
            <p className={typestyles.result}><strong>Type(s):</strong>
                <ul>
                {
                  props.pokemon.typeList.map((type, index) => {
                      return (
                        <li key={index}>{type}</li>
                      )
                  })
                }
                </ul>
            </p>
        </div>
    );
}

export default TypeResult;
