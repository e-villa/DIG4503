import Head from 'next/head';
import Link from 'next/link';
import NameSearch from "../components/NameSearch";


import namestyles from '../components/name.module.css';

  const Name = () => {
        return(
            <body className={namestyles.body}>
            <div>
            <Head>
                <title>Name</title>
            </Head>
            <Link href="/">
                <a className={namestyles.a} >Go Back</a>
            </Link>

            <NameSearch/>
            <form className={namestyles.nameform}>
            <h2 className={namestyles.h2}>Reporting Area</h2>
            <div className={namestyles.result} id="reportingArea"> </div>
            </form>
            <div className= {namestyles.displayname}></div>
            </div>
            </body>
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
