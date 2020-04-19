import pokegens1 from "../pokegens.module.css";

class PokeGens extends React.Component {
  render() {
    return (
      <body>
      <Head>
          <title>Pokemon Generations</title>
      </Head>
      <Link href="/">
          <a className={pokegens1.a} >Go Back</a>
      </Link>
      <p className={pokegens1.p}>The Gallery of the first three generation's pokemon!</p>
      <div className="firstsgens">
        <ul>
          <li id="list" className="gen1">Gen 1</li>
          <div className= {pokegens1.photo1}></div>
          <li id="list" className="gen2">Gen 2</li>
          <div className= {pokegens1.photo2}></div>
          <li id="list" className="gen3">Gen 3</li>
          <div className= {pokegens1.photo3}></div>

        </ul>
      </div>
      </body>
    );
  }
}

export default PokeGens;
