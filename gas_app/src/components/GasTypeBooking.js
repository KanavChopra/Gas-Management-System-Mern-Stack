import React, { useEffect, useState } from "react";

import axios from "axios";
import Gas from "./Gas";
import Loader from "./Loader";
import Error from "./Error";

function GasTypeBooking() {
  const [gases, setGases] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/gases/getAllGases`);
        setGases(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <Loader />
        ) : gases ? (
          gases.map((gas) => {
            return (
              <div className="col-md-9 mt-2">
                <Gas gas={gas} />
              </div>
            );
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}

export default GasTypeBooking;
