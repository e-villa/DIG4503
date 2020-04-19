import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from "../components/TypeSearch/";

import typestyles from '../components/type.module.css';

function TypePage() {
  return (
    <body className={typestyles.body}>
    <div>
      <Head>
        <title>Search Pokemon by type</title>
      </Head>

      <Link href="/">
          <a className={typestyles.a} >Go Back</a>
      </Link>

      <TypeSearch/>

      <div className= {typestyles.displayType}></div>

    </div>
    </body>
  );
}

export default TypePage;



/* class Type extends React.Component {
    constructor(props) {
        super(props);

        this.state = { "table": [] };
    }

    processTable = (processed) => {
        return(
            this.setState( {"table": processed} )
        )
    }

    createTable() {
        return(
            <table>
                <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        this.state.table.map((entry, index) => {
                            return(
                                <tr key={index}>
                                    <td>{entry.id}</td>
                                    <td>{entry.name}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }

    render() {
        return(
            <div>
                <Head>
                    <title>Search by type page!</title>
                </Head>
                <br />
                <Link href="/index">
                    <a>Home</a>
                </Link>
                <br />
                <TypeSearch />
                <br />
                <hr />
                <h2>Reporting</h2>
                <div>
                    {this.createTable()}
                </div>
            </div>
        );
    }
}
*/

// const Type = () => {
//     return(
//         <div className={styles.body}>
//             <Head>
//                 <title>Search by type page!</title>
//             </Head>
//             <TypeSearch />
//             <br />
//             <Link href="/index">
//                 <a className={styles.home_button}>Home</a>
//             </Link>
//             <br />
//             <hr />
//             <h2>Reporting</h2>
//             <div id="reportingArea"></div>
//         </div>
//     );
// }

//export default Type;
