import React, { useState, useEffect } from "react";
// import { Tabs } from "antd";

// import Tab from "react-bootstrap/Tab";
import "../css/profile.css";

import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";
import Success from "./Success";
// import Register from "../components/Register";
// import Tabs from "react-bootstrap/Tabs";

// import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import MyBooking from "./MyBooking";

function Profile() {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [confirmPassword, setConfirmPassword] = useState();
  // const [address, setAddress] = useState();
  // const [pincode, setPincode] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [bookings, setBookings] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  const [activeTab, setActiveTab] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await axios.post("/api/bookings/getBookingsByUserId", {
  //         userid: user._id,
  //       });
  //       console.log(data);
  //       // setBookings(localData);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       setError(error);
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // const localGasData = JSON.parse(localStorage.getItem("currentUserBooking"));

  return (
    <div class="container body" style={{ marginTop: "70px" }}>
      {/* <Carousel indicators="false">
        <Carousel.Item className="carousel-itemImg"> */}
      <div class="row">
        {success}
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          {/* <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div> */}
          <div class="col-lg-12 login-title">MY PROFILE</div>
          {error && <Error />}
          {success && <Success message="Registration Successfull" />}

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              {/* <form> */}
              <div class="form-group display-7">
                <label class="form-control-label">NAME</label>
                <input
                  type="text"
                  className="form-control textInput"
                  // name="name"
                  value={user.name}
                  // onChange={(e) => {
                  //   setName(e.target.value);
                  // }}
                />
              </div>
              <div class="form-group display-7">
                <label class="form-control-label">EMAIL</label>
                <input
                  type="email"
                  className="form-control emailInput"
                  // name="email"
                  value={user.email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">MOBILE NUMBER</label>
                <input
                  type="number"
                  className="form-control passwordInput"
                  style={{ backgroundColor: "transparent" }}
                  value={user.phoneNo}
                  // name="password"
                  // onChange={(e) => {
                  //   setPhoneNo(e.target.value);
                  // }}
                />
              </div>
              <div class="form-group">
                <label class="form-control-label">ADDRESS</label>
                <input
                  type="text"
                  // name="confirmpassword"
                  className="form-control passwordInput"
                  // i
                  value={user.address}
                  // onChange={(e) => {
                  //   setAddress(e.target.value);
                  // }}
                />
              </div>
              <div class="form-group">
                s<label class="form-control-label">PINCODE</label>
                <input
                  type="text"
                  // name="confirmpassword"
                  className="form-control passwordInput"
                  // i
                  value={user.pincode}
                  // onChange={(e) => {
                  //   setPincode(e.target.value);
                  // }}
                />
              </div>
              {/* </form>/ */}
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
        </div>
      </div>
      {/* </Carousel.Item> */}
      {/* <Carousel.Item>
          <div class="row">
            {loading && <Loader />}
            <MyBooking />
          </div>
        </Carousel.Item> */}
      {/* </Carousel> */}
    </div>
  );
}

export default Profile;
