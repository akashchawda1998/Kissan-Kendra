import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandLogos = [
"src/assets/img/brand/brand-1.png",
"src/assets/img/brand/brand-2.png",
"src/assets/img/brand/brand-3.png",
"src/assets/img/brand/brand-4.png",
"src/assets/img/brand/brand-5.png",
"src/assets/img/brand/brand-6.png",
"src/assets/img/brand/brand-7.png",
"src/assets/img/brand/brand-8.png",

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
  centerMode: false, // Disable to prevent partial logos
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 6},
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
    <div className="brand-layout1 mb-40 mt-40 ">
      <div className="container-fluid">
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginTop:"20px"
          }}
        >
          Our Brands
        </h2>
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="px-3">
              <div className="bran-img" style={{ padding: 10, textAlign: "center" }}>
                <img
                  src={logo}
                  alt={`brand-${index}`}
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
