import React, { useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
  function booking() {
    window.location.href = "/booking";
  }
  function profile() {
    window.location.href = "/profile";
  }
  function Mybooking() {
    window.location.href = "/mybooking";
  }
  function userBooking() {
    window.location.href = "/userbooking";
  }
  function allUser() {
    window.location.href = "/allUser";
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark p-1 fixed-top mb-3">
        <a class="navbar-brand logo-style" href="/">
          GASIUM
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          style={{ textAlign: "right" }}
          id="navbarNav"
        >
          <ul
            class="navbar-nav style-nav"
            style={{ marginLeft: "auto", marginRight: "30px" }}
          >
            {user ? (
              <>
                <button
                  type="button"
                  className="btn btn-secondary bg-dark dropdown-toggle dropdownToggleButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.name}
                </button>
                <div className="dropdown-menu bg-dark dropdownHover1">
                  {user.isAdmin ? (
                    <>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={() => (window.location.href = "/inventory")}
                      >
                        Inventory
                      </a>

                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={userBooking}
                      >
                        User's Booking
                      </a>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={allUser}
                      >
                        All Users
                      </a>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={logout}
                      >
                        Log Out
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={booking}
                      >
                        Book Cylinder
                      </a>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={profile}
                      >
                        Profile
                      </a>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={Mybooking}
                      >
                        My Bookings
                      </a>
                      <a
                        className="dropdown-item dropdownHover"
                        href="#"
                        onClick={logout}
                      >
                        Log Out
                      </a>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <li class="nav-item active">
                  <a class="nav-link" href="/register">
                    Register
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/login">
                    Login
                  </a>
                </li>

                {/* <li className="nav-item dropdown ">
                  <a
                    className="nav-link  dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <div
                    className="dropdown-menu bg-dark dropdown-menu-style"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li> */}
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
