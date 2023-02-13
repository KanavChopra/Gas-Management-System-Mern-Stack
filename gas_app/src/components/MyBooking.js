import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "./Error";
// import Success from "./Success";
import Loader from "./Loader";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/mybooking.css";
import Swal from "sweetalert2";
import Badge from "react-bootstrap/Badge";

function MyBooking() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);
  // const [noBookings, setNoBookings] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const book = await axios.post("/api/bookings/getBookingsByUserId", {
          userid: user._id,
        });
        const response = book.data;
        setBookings(response);
        console.log(response);
        setLoading(false);
        // if (response.length === 0) {
        //   setNoBookings(true);
        // } else {
        //   setNoBookings(false);
        // }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  async function cancelBooking(bookingid, gasid) {
    try {
      setLoading(true);
      const result = await axios.post("/api/bookings/cancelBooking", {
        bookingid,
        gasid,
      }).data;
      console.log(result);
      setLoading(false);
      Swal.fire({
        title: "Congrats",
        text: "Your booking has been Cancelled",
        background: "#222d32",
        icon: "success",
      }).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire("Oops", "Something went Wrong", "error");
    }
  }

  return (
    <div className="container body" style={{ marginTop: "90px" }}>
      <div className="row justify-content-center align-item-center bgShadow">
        {/* {success} */}
        <h1 className="bookingHeading">My Booking</h1>

        {/* <div className="flex"> */}

        {loading && <Loader />}
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <Card
              className="card-css"
              style={{
                width: "30rem",
                marginRight: "20px",
                marginBottom: "20px",
                alignItems: "center",
              }}
            >
              <Card.Body className="">
                <Card.Title>
                  <span className="titleCss" style={{ color: "orange" }}>
                    Gas Name:
                  </span>
                  <span className="detailCss"> {booking.gases}</span>
                </Card.Title>
                <Card.Text>
                  <span className="titleCss">Gas Id: </span>
                  <span className="detailCss">{booking.gasid}</span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">User Id: </span>
                  <span className="detailCss"> {booking._id}</span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">Booked Date: </span>
                  <span className="detailCss"> {booking.bookedDate}</span>
                </Card.Text>

                <Card.Text>
                  <span className="titleCss">Quantity: </span>
                  <span className="detailCss">{booking.quantity}</span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">Status: </span>
                  <span className="detailCss">
                    {booking.status == "cancelled" ? (
                      <Badge bg="danger">Cancelled</Badge>
                    ) : (
                      <Badge bg="success">Confirmed</Badge>
                    )}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">Booking Amount:</span>{" "}
                  <span className="detailCss">{booking.totalAmount}</span>
                </Card.Text>
                {booking.status != "cancelled" && (
                  <Button
                    variant="primary"
                    onClick={() => {
                      cancelBooking(booking._id, booking.gasid);
                    }}
                  >
                    Cancel
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="no-bookings">No Booking Available</div>
        )}
        {/* </div> */}
        {/* </ul> */}
        {/* <ul style={{ listStyle: "none" }}>
          {bookings.map((booking) => (
            <div className="col-md-12">
              <li>{booking.gasid}</li>
              <li>{booking.gases}</li>
              <li>{booking.quantity}</li>
              <li>{booking.status}</li>
              <li>{booking.totalAmount}</li>
              <li>{booking._id}</li>
            </div>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default MyBooking;
