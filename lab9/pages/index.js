import Head from 'next/head';
import Link from 'next/link';

//object identified as styles
import idstyles from '../components/id.module.css';
import namestyles from '../components/name.module.css';
import typestyles from '../components/type.module.css';

const Home = () => {

  return(

    <div>

      <Head>
        <title>Welcome Pokemon Trainer!</title>
      </Head>
      <h1 className = {idstyles.header}>Hello, ready to be a Pokemon Master?</h1>
      <p className = {idstyles.colorlightpink}>
      Start the search:
      </p>

      <p>
      <Link href = "/id">
      <a className={idstyles.link}>Pokemon ID Directory</a>
      </Link>
      </p>

      <p>
      <Link href = "/name">
      <a className={namestyles.link}>Pokemon Name Directory</a>
      </Link>
      </p>

      <p>
      <Link href = "/type">
      <a className={typestyles.link}>Pokemon Type Directory</a>
      </Link>
      </p>
      <div
      className={idstyles.display}>
      </div>
    </div>


  );
}
export default Home;
