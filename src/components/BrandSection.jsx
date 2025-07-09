import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brand1 from "../assets/img/brand/brand-1.png";
import brand2 from "../assets/img/brand/brand-2.png";
import brand3 from "../assets/img/brand/brand-3.png";
import brand4 from "../assets/img/brand/brand-4.png";
import brand5 from "../assets/img/brand/brand-5.png";
import brand6 from "../assets/img/brand/brand-6.png";
import brand7 from "../assets/img/brand/brand-7.png";
import brand8 from "../assets/img/brand/brand-8.png";

const brandLogos = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 6 },
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const BrandsSection = () => {
  return (
    <div className="brand-layout1 mb-40 mt-40">
      <div className="container-fluid">
        <h2 style={{ textAlign: "center", fontSize: "3rem", marginTop: "20px" }}>
          Our Brands
        </h2>
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="px-3">
              <div className="bran-img" style={{ padding: 10, textAlign: "center" }}>
                <img
                  src={logo}
                  alt={`brand-${index + 1}`}
                  style={{
                    maxWidth: "100%",
                    height: "80px",
                    objectFit: "contain",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandsSection;
