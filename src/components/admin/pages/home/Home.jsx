import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "../home/Home.css"

const Home = () => {
  return (
    <div className="home">
    <>
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="customer" />
          <Widget type="court" />
          <Widget type="earnings" />
        </div>
        
      </div>
    </>
  </div>
  );
};
export default Home;
