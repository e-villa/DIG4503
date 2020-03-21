import NameSearch from "../components/NameSearch/index.js";
import IdSearch from "../components/IdSearch/index.js";

const Home = () => {
  return (
    <div>
      <NameSearch/>
      <IdSearch/>
      <div>
        <h2>Results</h2>
        <div id="reportingArea"></div>
      </div>
    </div>
  );
}

export default Home;
