import Head from 'next/Head';
import Link from 'next/link';
import NameSearch from "../components/NameSearch";


import namestyles from '../components/name.module.css';

  const Name = () => {
        return(
            <div>
            <Head>
                <title>Name</title>
            </Head>
            <Link href="/">
                <a className={namestyles.gobacklink} >Go Back</a>
            </Link>

            <NameSearch/>

            <h2>Reporting Area</h2>
             <div id="reportingArea"></div>
            <div className= {namestyles.displayname}></div>
            </div>
            /*
            <h2 className = {namestyles.header}>Pokemon Name</h2>
              <form onSubmit={this.readName} >
                <input id="name" type="text" placeholder="Pokemon name"/>
                <button>Submit</button>
              </form>
              <div className={namestyles.displayname}>
              </div>
              <h2>Reporting Area</h2>
              <div id="reportingArea"></div>
            </div>
            */

        );
    }


export default Name;
