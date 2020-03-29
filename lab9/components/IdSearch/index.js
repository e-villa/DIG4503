import idstyles from '../components/id.module.css';


class IdSearch extends React.Component {

  readId(event) {

  event.preventDefault();

  let element = document.querySelector("#id");

  fetch("http://localhost:3000/api/pokemon/id/" + element.value)
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
render(){
    return(
      render() {
      return(
          <div>
               <h5 className={styles.header5}>Pokemon ID</h5>
               <form onSubmit={this.readId}>
                  <input id="id" type="text" className={styles.input} />
                  <br></br>
                  <button className={styles.button}>Submit</button>
              </form>
          </div>
      /*  <div >
            <Head>
                <title>ID</title>
            </Head>
            <Link href="/">
                <a className={idstyles.gobacklink} >Go Back</a>
            </Link>

            <h2 className={idstyles.header}>Pokemon ID</h2>
            <form onSubmit={this.readId}
            <input type="text" id="id" placeholder="Pokemon ID"/>
            <button onClick={() => { this.readId() } }>Search</button>

            <div id="reportingArea"></div>
           <div className= {idstyles.displayImg}></div>
           </form>
        </div>
        */
       );
   }
}


export default IdSearch;
