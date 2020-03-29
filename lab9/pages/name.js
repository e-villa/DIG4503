import Head from 'next/Head';
import Link from 'next/link';

import namestyles from '../components/name.module.css';

class NameSearch extends React.Component {

           readName(event) {

           event.preventDefault();

           let element = document.querySelector("#name");

           fetch("/api/pokemon/name/" + element.value)
          .then((res) => {
               return res.json();
          })
          .then((processed) => {

               let reporting = document.querySelector("#reportingArea");

               if(processed.error) {
                   reporting.innerHTML = processed.error;
               }
               else {
                   reporting.innerHTML = processed.name;
               }

           });
            element.value = "";
       }

    render() {
        return(
            <div>
            <Head>
                <title>Name</title>
            </Head>
            <Link href="/">
                <a className={namestyles.gobacklink} >Go Back</a>
            </Link>
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

        );
    }
}

export default NameSearch;
