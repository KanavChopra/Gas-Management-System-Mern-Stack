import React from "react";
import "../css/MyGas.css";
import img1 from "./assets/5kg.png";

import { Link } from "react-router-dom";

function MyGas({ gas }) {
  return (
    <div className="container mygasComponent">
      <div className="row outer-div">
        {/* <div className="col-md-4">
        <img src={img1} alt="Image" className="smallImg" />
      </div> */}
        <div className="col-md-12">
          <p>
            <span>Type:</span> {gas.name}
          </p>
          <p>
            <span>Stock: </span> {gas.maxCount}
          </p>
          <p>
            <span>Amount: </span>₹ {gas.rent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyGas;
