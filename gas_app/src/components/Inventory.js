import React, { useEffect, useState } from "react";

import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import MyGas from "./MyGas";
function Inventory() {
  const [gases, setGases] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/gas/getAllGasAdmin`);
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
    <div className="container">
      {loading ? (
        <Loader />
      ) : gases ? (
        gases.map((gas) => {
          return (
            <div style={{ margin: "10px" }}>
              <MyGas gas={gas} />
            </div>
          );
        })
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Inventory;
