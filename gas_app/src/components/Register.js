import React, { useState } from "react";
import "../css/register.css";
import Success from "./Success";
import axios from "axios";
import Error from "./Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  // const [name, setName] = useState("");
  const difftoast = (err) => {
    toast(err);
    console.log(err);
  };
  console.log(name);
  async function register() {
    if (password == confirmPassword) {
      const user = {
        name,
        email,
        password,
        confirmPassword,
        phoneNo,
        address,
        pincode,
      };
      const passwordPattern =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

      console.log(user);
      try {
        if (!email.includes("@")) {
          difftoast("Please Enter valid Email Id");
        } else if (!passwordPattern.test(password)) {
          difftoast(
            "Password must contain at least 8 characters including uppercase, lowercase, numbers, and special characters"
          );
        } else {
          const result = await axios.post("/api/users/register", user).data;
          difftoast("Registered Successfully");
        }
        // setSuccess(true);
        // toast.success("Registration Succesfull");
        // difftoast("Registration Succesfull");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNo("");
        setAddress("");
        setPincode("");
      } catch (error) {
        setError(true);
        console.log(error);
        difftoast("Error Occured!!!");
      }
    } else {
      // alert("Password Not Matched");
      // toast.error("Registration Failed");
      // difftoast("Registration Failed");
    }
  }
  return (
    <>
      {/* <ToastContainer /> */}
      <div class="container body" style={{ marginTop: "70px" }}>
        <div class="row">
          {success}
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            {/* <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div> */}
            <div class="col-lg-12 login-title">REGISTER PANEL</div>
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
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group display-7">
                  <label class="form-control-label">EMAIL</label>
                  <input
                    type="email"
                    className="form-control emailInput"
                    // name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control passwordInput"
                    i
                    value={password}
                    // name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label class="form-control-label">CONFIRM PASSWORD</label>
                  <input
                    type="password"
                    // name="confirmpassword"
                    className="form-control passwordInput"
                    // i
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">MOBILE NUMBER</label>
                  <input
                    type="number"
                    // name="confirmpassword"
                    className="form-control passwordInput"
                    // i
                    value={phoneNo}
                    onChange={(e) => {
                      setPhoneNo(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">ADDRESS</label>
                  <input
                    type="text"
                    // name="confirmpassword"
                    className="form-control passwordInput"
                    // i
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div class="form-group">
                  <label class="form-control-label">PINCODE</label>
                  <input
                    type="text"
                    // name="confirmpassword"
                    className="form-control passwordInput"
                    // i
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>
                <div class="col-lg-12 loginbttm">
                  {/* <div class="col-lg-6 login-btm login-text">
                  </div> */}
                  <div class="col-lg-12 login-btm login-button ">
                    <button
                      type="submit"
                      class="btn btn-outline-primary"
                      onClick={register}
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
                {/* </form>/ */}
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Register;
