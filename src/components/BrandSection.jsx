import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandLogos = [
  "https://kisaankendra.in/wp-content/uploads/2024/03/download.png",
  "https://kisaankendra.in/wp-content/uploads/2024/03/CEAT_Tyres_Ltd-540x179.png",
  "https://kisaankendra.in/wp-content/uploads/2024/03/RGB_LOGO_APOLLO_TYRES_COMPACT_POS_GTD-540x207.jpg",
  "https://kisaankendra.in/wp-content/uploads/2024/03/JK-Tyre-logo-2700x700-1-540x120.png",
  "https://kisaankendra.in/wp-content/uploads/2024/03/download.png",
  "https://kisaankendra.in/wp-content/uploads/2024/03/CEAT_Tyres_Ltd-540x179.png",
  "https://kisaankendra.in/wp-content/uploads/2024/03/RGB_LOGO_APOLLO_TYRES_COMPACT_POS_GTD-540x207.jpg",
  "https://kisaankendra.in/wp-content/uploads/2024/03/JK-Tyre-logo-2700x700-1-540x120.png",
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
