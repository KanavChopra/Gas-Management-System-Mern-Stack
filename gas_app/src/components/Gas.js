import React from "react";
import "../css/Gas.css";
// import img1 from "./assets/5kg.png";

import { Link } from "react-router-dom";

function Gas({ gas }) {
  return (
    <div className="row outer-div">
      {/* <div className="col-md-4">
        <img src={img1} alt="Image" className="smallImg" />
      </div> */}
      <div className="col-md-12">
        <p>
          <span>Type:</span> {gas.name}
        </p>
        <p>
          <span>Max Count:</span> {gas.maxCount}
        </p>
        <p>
          <span>Amount: </span>₹ {gas.rent}
        </p>
        <div>
          <Link to={`/book/${gas._id}`}>
            <button style={{ float: "right" }} className="btn btn-primary book">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gas;
