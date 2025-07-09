import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Imports
import tractorImg from "../assets/img/catagory-Logo/tractor.png";
import batteriesImg from "../assets/img/catagory-Logo/batteries.png";
import motorsImg from "../assets/img/catagory-Logo/engine.png";
import tyresImg from "../assets/img/catagory-Logo/tyre.png";
import axeImg from "../assets/img/catagory-Logo/axe.png";
import titleLogo from "../assets/img/icon/title-logo.png";

// Categories
const categories = [
  { title: "Tractors", image: tractorImg, link: "tractor" },
  { title: "Batteries", image: batteriesImg, link: "batteries" },
  { title: "Motors", image: motorsImg, link: "motors" },
  { title: "Tyres", image: tyresImg, link: "tyres" },
  { title: "Axe", image: axeImg, link: "axe" },
  { title: "Batteries", image: batteriesImg, link: "batteries" },
];

const CategoriesCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="categorie-layout1 py-5">
      <div className="container-fluid">
        <div className="title-area text-center mb-4">
          <div className="title-img mb-2">
            <img
              src={titleLogo}
              alt="title logo"
              style={{ maxHeight: "30px" }}
            />
          </div>
          <span className="sec-subtitle fs-3">Our Categories</span>
        </div>

        <Slider {...settings}>
          {categories.map((item, index) => (
            <div key={index}>
              <div className="categorie-style1 text-center px-3">
                <div className="categorie-img mb-3">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        maxWidth: "120px",
                        height: "auto",
                        objectFit: "contain",
                        margin: "0 auto",
                        padding: "10px",
                      }}
                    />
                  </a>
                </div>
                <div className="categorie-content">
                  <h3 className="categorie-title h5">
                    <a href={item.link}>{item.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoriesCarousel;
