import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="hero-section">
      <h1 className="hero-header">
        Build Better <span className="hero-header-last">Projects</span>
        <br />
        <span className="hero-second-line">With the Right Tools</span>
      </h1>
      <p className="hero-para">
        Get everything you need to start your developer journey all in one place
      </p>
      <Link to="/products" className="btn hero-btn font-sm">
        Start Browsing
      </Link>
    </div>
  );
}

export default HomePage;
