import Head from 'next/head';
import Link from 'next/link';

//objects identified as styles
import homestyles from '../components/homepage.module.css';
const Home = () => {

  return(
    <body className={homestyles.homeImg}>
    <div>

      <Head>
        <title>Welcome Pokemon Trainer!</title>
      </Head>
      <div className ={homestyles.container}>
      <h1 className = {homestyles.header}>Hello, ready to be a Pokemon Master?</h1>
      <p className = {homestyles.color}>
      Start the search:
      </p>

      <p>
      <Link href = "/id">
      <a className={homestyles.link}>Pokemon ID Directory</a>
      </Link>
      </p>

      <p>
      <Link href = "/name">
      <a className={homestyles.link}>Pokemon Name Directory</a>
      </Link>
      </p>

      <p>
      <Link href = "/type">
      <a className={homestyles.link}>Pokemon Type Directory</a>
      </Link>
      </p>
      <p>
      <Link href = "/pokegens">
      <a className={homestyles.link}>Pokemon Old Generations Gallery</a>
      </Link>
      </p>
      <p>
      <Link href = "/newpokegens">
      <a className={homestyles.link}>Pokemon New Generations Gallery</a>
      </Link>
      </p>
      <div className={homestyles.display}></div>
      </div>
    </div>
    </body>


  );
}
export default Home;
