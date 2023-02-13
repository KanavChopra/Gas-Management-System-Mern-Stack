import React from "react";
import { Link } from "react-router-dom";
import img1 from "./assets/pic.png";
import img2 from "./assets/pic1.jpg";
import img3 from "./assets/pic2.jpg";
import img4 from "./assets/pic3.jpg";
import "../css/Discover.css";

function Discover() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="container justify-content-center">
      <div className="row">
        {user ? (
          <>
            <div className="col-md-12 mt-3 mb-3">
              <Link to="/booking" className="mx-3">
                <button
                  className="w-25"
                  style={{
                    background: "transparent",
                    fontSize: "22px",
                    padding: " 5px 10px",
                    border: "1px solid orange",
                  }}
                >
                  Book Cylinder
                </button>
              </Link>
              <Link to="/booking" className="mx-3">
                <button
                  className="w-25"
                  style={{
                    background: "transparent",
                    fontSize: "22px",
                    padding: " 5px 10px",
                    border: "1px solid orange",
                  }}
                >
                  Profile
                </button>
              </Link>
              <Link to="/booking" className="mx-3">
                <button
                  className="w-25"
                  style={{
                    background: "transparent",
                    fontSize: "22px",
                    padding: " 5px 10px",
                    border: "1px solid orange",
                  }}
                >
                  My Booking
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-12 mt-3 mb-3">
              <Link to="/register" className="mx-3">
                <button
                  className="w-25"
                  style={{
                    background: "transparent",
                    fontSize: "22px",
                    padding: " 5px 10px",
                    border: "1px solid orange",
                  }}
                >
                  Register
                </button>
              </Link>
              <Link to="/login" className="mx-3">
                <button
                  className="w-25"
                  style={{
                    background: "transparent",
                    fontSize: "22px",
                    padding: " 5px 10px",
                    border: "1px solid orange",
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </>
        )}

        <hr />
        <h2 className="display-7 mt-4 discoverHeading">
          Cooking <span>Gas</span>
        </h2>

        <p className="mx-auto discover-para" style={{ textAlign: "justify" }}>
          Gasium has played a major role in India’s transition to cleaner fuels
          from the time it started marketing Liquified Petroleum Gas (LPG) in
          2023. Brand Indane was conceived in 1964 to bring modern cooking to
          Indian kitchens and the first Indane LPG connection was released on
          22nd October 2023 in Kolkata. From a humble beginning of a consumer
          base of around 2,000 in 2023, the brand has grown into a super brand
          that rules nearly 16 crore kitchens. As a matter of fact, every second
          cooking gas connection in India is an Indane. Indane has now become
          one of the largest packed-LPG brands in the world, with Gasium as the
          second-largest marketer of LPG globally. Indane is a Consumer
          Superbrand as conferred by the Superbrands Council of India. It is a
          brand synonymous with safety, reliability, and convenience. Today,
          Indane LPG is sold and delivered in six different pack sizes. The 5 kg
          and 14.2 kg cylinders are largely meant for domestic use and comprise
          almost half of all gas distributed, while the 19 kg, 47.5 kg and 425
          kg Jumbo cylinders are marketed for industrial and commercial
          consumption. The recently launched 5 kg and 10 kg cylinders made of
          fiber composite with a trendy and translucent look are the latest
          addition to the domestic category. Indane LPG is also supplied in bulk
          to large-volume consumers in the manufacturing and engineering
          sectors. To improve LPG penetration in the country and help better the
          lives of rural masses, Gasium undertook the task of achieving 100% LPG
          penetration in the country in December 2015. Vyachakurahalli in
          Chikkaballapur district in Karnataka became the country’s first
          smokeless village, entering into the Limca Book of Records-2017, after
          all households switched from conventional fuel to LPG. At Gasium, we
          continuously strive for customer delight through our value-added
          products and services. Indane has leveraged the strength of digital
          technology to provide numerous initiatives for greater customer
          convenience viz.
        </p>
        {/* <iframe
        width="100%"
        height="350px"
        src="https://www.youtube.com/embed/vI6r8LdqJXk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
        <br />
        <p
          className="mx-4"
          style={{
            fontSize: "28px",
            fontWeight: "500",
            fontFamily: "Abel",
            color: "orange",
          }}
        >
          ONE MONTH OF GASIUM
        </p>
        <div className="imagesDiscover ">
          <img src={img1} alt="" />
          {/* <img src={img1} alt="" /> */}
        </div>
        <div className="imageDiscover2 mt-5 justify-content-center d-flex">
          <div className="col-md-4">
            <img src={img2} alt="" height="150px" width="350px" />
          </div>
          <div className="col-md-4">
            <img src={img3} alt="" height="150px" width="350px" />
          </div>
          <div className="col-md-4">
            <img src={img4} alt="" height="150px" width="350px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
