import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/BookingScreen.css";
import Loader from "./Loader";
import Swal from "sweetalert2";
import img1 from "./assets/5kg.png";
import { Link } from "react-router-dom";

function BookingScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [gases, setGases] = useState();
  const { gasid } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  let date = new Date();
  let options = { year: "numeric", month: "long", day: "numeric" };
  let formattedDate = date.toLocaleDateString("en-US", options);

  const increaseQuantity = () => {
    // setTotalAmount(gases.rent);

    if (quantity < gases.maxCount) {
      setTotalAmount((quantity + 1) * gases.rent);
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    // setTotalAmount(gases.rent);
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalAmount((quantity - 1) * gases.rent);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post(`/api/gases/getgasbyid`, {
            gasid: gasid,
            // bookedDate: selectedDate,
          })
        ).data;

        setGases(data);
        setLoading(false);
        // setTotalAmount(quantity*gases.rent);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  // console.log(quantity);

  // const address = localStorage.getItem("currentUser").address;
  const bookedDate = formattedDate;
  async function bookGas() {
    const bookingDetails = {
      gases,
      userid: JSON.parse(localStorage.getItem("currentUser"))._id,
      address: JSON.parse(localStorage.getItem("currentUser")).address,
      bookedDate,
      quantity,
      totalAmount,
    };
    try {
      const result = await axios.post("/api/bookings/bookgas", bookingDetails);
      Swal.fire({
        title: "Congrats",
        text: "Your Cylinder has been Booked",
        background: "#222d32",
        icon: "success",
      });
      // res.send(result);
      console.log(result);
      // localStorage.setItem(
      //   "currentUserBooking",
      //   JSON.stringify(bookingDetails)
      // );
    } catch (error) {
      console.log(error);
    }
  }

  // function handleBook() {
  //   const bookingData = {
  //     gasid: gasid,
  //     quantity: quantity,
  //     totalAmount: totalAmount,
  //     selectedDate: selectedDate,
  //   };
  //   console.log(bookingData);
  // }

  return (
    <div
      className="container"
      style={{ marginTop: "90px", marginBottom: "15px" }}
    >
      {/* <h1>Booking Screen</h1>  */}
      {/* <h1>Gas id: {gasid}</h1> */}
      {loading ? (
        <Loader />
      ) : gases ? (
        <div className="inner-div" style={{ marginTop: "30px" }}>
          <div className=" row justify-content-center">
            <div className="col-md-5">
              <h1 className="nameCyl">{gases.name}</h1>
              <div
                style={{ border: "1px solid grey" }}
                className="justify-content-center "
              >
                <img
                  src={img1}
                  alt="Image"
                  className="align-item-center bigImg"
                />
              </div>
            </div>
            <div className="col-md-5 justify-content-center align-items-center">
              <h1 className="bookingH1">Booking Details</h1>
              <hr />
              <p className="detailpara">
                <span>Name: </span>
                {JSON.parse(localStorage.getItem("currentUser")).name}
              </p>
              <p className="detailpara">
                <span>Address: </span>
                <span className="addressSpan">
                  {" "}
                  {JSON.parse(localStorage.getItem("currentUser")).address}
                </span>
              </p>
              <p className="detailpara">
                <span>Max Count: </span>
                {gases.maxCount}
              </p>
              <p className="detailpara">
                <span>Quantity: </span>
                <button
                  className="bg-dark"
                  style={{ border: "none" }}
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                &nbsp;&nbsp;
                <b>{quantity}</b>
                &nbsp;&nbsp;
                <button
                  className="bg-dark"
                  style={{ border: "none" }}
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </p>
              <p className="detailpara">
                <span>Booking Date: </span>
                {bookedDate}
              </p>
              <div>
                <h1>Amount: </h1>
                <hr />
                <p className="detailpara">
                  <span>Total Quantity: </span>
                  {quantity}
                </p>
                <p className="detailpara">
                  <span>Amount Per Cylinder: </span>₹{gases.rent}
                </p>
                <p className="detailpara">
                  <span>Total Amount: </span>
                  {totalAmount}
                </p>
              </div>
              {/* <Link onClick={}> */}
              {quantity > 0 && (
                <button className="btn btn-primary" onClick={bookGas}>
                  Book Now
                </button>
              )}
              {/* </Link> */}
            </div>
          </div>
        </div>
      ) : (
        <h1>Error....</h1>
      )}
    </div>
  );
}

export default BookingScreen;
