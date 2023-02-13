import React from "react";

const Success = ({ message }) => {
  return (
    <div>
      <div
        className="alert alert-success"
        style={{ backgroundColor: "greenyellow", opacity: "0.8" }}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
};

export default Success;
