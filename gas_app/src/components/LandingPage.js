import React from "react";
import { Link } from "react-router-dom";
import "../css/landingScreen.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

function LandingPage() {
  return (
    <div className="container m-5">
      <div className="row landing justify-content-center align-item-center">
        <div className="col-md-12">
          <h2 data-aos="zoom-in" className="landingTitle">
            Gasium
          </h2>
          <h1 data-aos="zoom-out" className="landingSlogan ">
            <span>C</span>onvenient <span>G</span>as <span>B</span>ooking{" "}
            <span>A</span>t <span>Y</span>our <span>F</span>ingertips
          </h1>
          <Link to="/home">
            <button className="btn1  landingButton">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
