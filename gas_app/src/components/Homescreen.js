import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./assets/1.cms";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import "../css/Homescreen.css";
import Discover from "./Discover.js";
import Footer from "./Footer.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function Homescreen() {
  const images = [
    {
      src: img1,
      caption: "Caption 1",
    },
    {
      src: img2,
      caption: "Caption 2",
    },
    {
      src: img3,
      caption: "Caption 3",
    },

    {
      src: img4,
      caption: "Caption 3",
    },

    {
      src: img5,
      caption: "Caption 3",
    },

    {
      src: img6,
      caption: "Caption 3",
    },

    {
      src: img7,
      caption: "Caption 3",
    },
  ];
  return (
    <div className="style" style={{ marginTop: "70px" }}>
      <Carousel fade>
        {/* <Carousel.Item> */}
        {images.map((image, url) => {
          return (
            <Carousel.Item className="carousel-itemImg">
              <img src={image.src} className="d-block slider-img" />
            </Carousel.Item>
          );
        })}
        {/* </Carousel.Item> */}
      </Carousel>
      {/* middle Content */}
      <Discover />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homescreen;
