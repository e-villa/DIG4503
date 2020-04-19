import pokegens2 from "../newpokegens.module.css";

class newPokeGens extends React.Component {
  render() {
    return (
      <body>
      <Head>
          <title>Pokemon Generations</title>
      </Head>
      <Link href="/">
          <a className={pokegens2.a} >Go Back</a>
      </Link>
      <p className={pokegens2.p}>The Gallery of the last three generation's pokemon!</p>
      <div className="firstsgens">
        <ul>
          <li id="list" className="gen1">Gen 1</li>
          <div className= {pokegens2.photo1}></div>
          <li id="list" className="gen2">Gen 2</li>
          <div className= {pokegens2.photo2}></div>
          <li id="list" className="gen3">Gen 3</li>
          <div className= {pokegens2.photo3}></div>

        </ul>
      </div>
      </body>
    );
  }
}

export default newPokeGens;
