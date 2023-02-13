import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 bg-dark mt-5">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5
              className="text-uppercase footer-heading"
              style={{ color: "orange" }}
            >
              Gasium Private Limited
            </h5>
            <p className="footer-para">
              <em>Book your gas with ease, anytime, anywhere</em>
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase footer-heading">Links</h5>
            <ul className="footer-list footer-para">
              <li style={{ textDecoration: "none" }}>
                <a href="https://www.linkedin.com/in/chetan9129/">
                  <em>LinkedIn</em>
                </a>
              </li>
              <li>
                <a href="https://github.com/chetan9129/">
                  <em>Github</em>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/chetan_sharma_9129?igshid=ZDdkNTZiNTM=">
                  <em>Instagram</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright: <a href="/"> www.gasium.com</a>
      </div>
    </footer>
  );
};

export default Footer;
