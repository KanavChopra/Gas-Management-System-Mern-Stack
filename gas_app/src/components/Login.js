import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import Error from "./Error";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");
  const [error, setError] = useState();

  const history = useNavigate();

  // this.login = login.bind(this);
  const difftoast = (err) => {
    toast(err);
    console.log(err);
  };
  async function login() {
    const user = {
      email,
      password,
    };
    try {
      const result = await axios.post("/api/users/login", user);
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      // window.location.href = "/";

      if (result.data.isAdmin === true) {
        window.location.href = "/";
      } else window.location.href = "/";
      difftoast("Succesfully Logged In");
      // console.log(result.data.message);
      // history.push("/");
    } catch (error) {
      difftoast("Incorrect Credentials");
      console.log(error.response.data.message);
      setError(true);
    }
    // console.log(user);
    // event.preventDefault();
  }

  return (
    <div class="container body" style={{ marginTop: "70px" }}>
      <div class="row">
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
            <i class="fa fa-key" aria-hidden="true"></i>
          </div>
          <div class="col-lg-12 login-title">LOGIN PANEL</div>

          {/* {error && <Error message="Invalid Credentials" />} */}

          <div class="col-lg-12 login-form">
            <div class="col-lg-12 login-form">
              {/* <form> */}
              <div class="form-group display-7">
                <label class="form-control-label">EMAIL</label>
                <input
                  type="text"
                  className="form-control textInput1"
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
                  className="form-control passwordInput1"
                  value={password}
                  onChange={(e) => {
                    setPasswrod(e.target.value);
                  }}
                />
              </div>

              <div class="col-lg-12 loginbttm">
                <div class="col-lg-12 login-btm login-button ">
                  <button onClick={login} class="btn btn-outline-primary">
                    LOGIN
                  </button>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
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
    </div>
  );
}

export default Login;
