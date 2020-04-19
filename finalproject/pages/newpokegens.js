import Head from 'next/head';
import Link from 'next/link';
import Pokegens from "../components/newPokegens";

import pokegens2 from "../components/newpokegens.module.css";

const Newpokegens = () => {

  return(
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
          <div className= {pokegens2.card1}>
          <li  className={"gen1"}><span>Gen 1</span></li>
          <div className= {pokegens2.photo1}></div>
          </div>
          <div className= {pokegens2.card2}>
          <li  className={"gen2"}><span>Gen 2</span></li>
          <div className= {pokegens2.photo2}></div>
          </div>
          <div className= {pokegens2.card3}>
          <li  className={"gen3"}><span>Gen 3</span></li>
          <div className= {pokegens2.photo3}></div>
          <div className= {pokegens2.photo4}></div>
          </div>
        </ul>
      </div>
      </body>
    );
}
export default Newpokegens;
