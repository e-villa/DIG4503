import React from "react";

import Head from 'next/head';
import Link from 'next/link';
import IdSearch from "../components/IdSearch";

import idstyles from '../components/id.module.css';

//import React from "react";

const Id = () => {
    return(
        <div >
            <Head>
                <title>ID</title>
            </Head>
            <Link href="/">
                <a className={idstyles.gobacklink} >Go Back</a>
            </Link>


          <IdSearch/>
           <h2>Reporting Area</h2>
            <div id="reportingArea"></div>
           <div className= {idstyles.displayImg}></div>
        </div>
       );
   }


export default Id;
