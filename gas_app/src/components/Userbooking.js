import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "../css/ManageUser.css";

function Userbooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const book = await axios.get("/api/bookings/getAllBooking");
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
  return (
    <div className="container body" style={{ marginTop: "105px" }}>
      <div className="row justify-content-center align-item-center ">
        <h1 className="bookingTitle">User's Booking</h1>
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
                  <span className="titleCss">Quantity: </span>
                  <span className="detailCss">{booking.quantity}</span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">Booking Amount:</span>{" "}
                  <span className="detailCss">{booking.totalAmount}</span>
                </Card.Text>
                <Card.Text>
                  <span className="titleCss">Booked Date: </span>
                  <span className="detailCss">{booking.bookedDate}</span>
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
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="no-bookings">No Booking Available</div>
        )}
        {bookings.length > 0 && <h1>There are {bookings.length} booking</h1>}
      </div>
    </div>
  );
}

export default Userbooking;
