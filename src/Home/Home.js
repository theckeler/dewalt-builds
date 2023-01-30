import { Link } from "react-router-dom";
import "./scss/home.scss";

const Home = () => {
  return (
    <div
      className="wrapper home p-8"
      style={{
        minHeight: "50vh",
        maxWidth: "1200px",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <h1 style={{ textTransform: "uppercase" }}>DeWalt Page Builds:</h1>
      <ul className="home-list">
        <li style={{ marginTop: "20px" }}>
          <Link to="/paid-media" style={{ textDecoration: "underline" }}>
            Paid Media
          </Link>
        </li>
        <li style={{ marginTop: "20px" }}>
          <Link to="/paas-cal" style={{ textDecoration: "underline" }}>
            Paas Calculator
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
