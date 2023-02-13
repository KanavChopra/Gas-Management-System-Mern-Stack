import React, { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

function Loader() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="container">
      <div
        className="row justify-content-center align-item-center"
        style={{ marginTop: "300px" }}
      >
        <DotLoader
          color="#fff"
          loading={loading}
          size={50}
          speedMultiplier="3"
        />
      </div>
    </div>
  );
}

export default Loader;
