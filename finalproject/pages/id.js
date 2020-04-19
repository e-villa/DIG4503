import React from "react";

import Head from 'next/head';
import Link from 'next/link';
import IdSearch from "../components/IdSearch";

import idstyles from '../components/id.module.css';

//import React from "react";

const Id = () => {
    return(
        <body className={idstyles.body}>
        <div>
            <Head>
                <title>ID</title>
            </Head>
            <Link href="/">
                <a className={idstyles.a} >Go Back</a>
            </Link>
          <IdSearch/>
          <form className={idstyles.idform}>
           <h2 className={idstyles.h2}>Reporting Area</h2>
            <div className={idstyles.result} id="reportingArea"></div>
          </form>
            <div className= {idstyles.displayImg}></div>
              </div>

        </body>

       );
   }


export default Id;
