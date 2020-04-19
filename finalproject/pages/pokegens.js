import Head from 'next/head';
import Link from 'next/link';
import Pokegens from "../components/Pokegens";

import pokegens1 from "../components/pokegens.module.css";

const Oldpokegens = () => {

  return(
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
          <div className= {pokegens1.card1}>
          <li  className={"gen1"}><span>Gen 1</span></li>
          <div className= {pokegens1.photo1}></div>
          </div>
          <div className= {pokegens1.card2}>
          <li  className={"gen2"}><span>Gen 2</span></li>
          <div className= {pokegens1.photo2}></div>
          </div>
          <div className= {pokegens1.card3}>
          <li  className={"gen3"}><span>Gen 3</span></li>
          <div className= {pokegens1.photo3}></div>
          </div>
        </ul>
      </div>
      </body>
    );
}
export default Oldpokegens;
