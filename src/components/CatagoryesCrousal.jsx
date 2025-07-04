import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    title: "Tractors",
    image: "src/assets/img/catagory-Logo/tractor.png",
    link: "tractor",
  },
  {
    title: "Batteries",
    image: "src/assets/img/catagory-Logo/batteries.png",
    link: "batteries",
  },
  {
    title: "Motors",
    image: "src/assets/img/catagory-Logo/engine.png",
    link: "motors",
  },
  {
    title: "Tyres",
    image: "src/assets/img/catagory-Logo/tyre.png",
    link: "tyres",
  },
  {
    title: "Axe",
    image: "src/assets/img/catagory-Logo/axe.png",
    link: "axe",
  },
  {
    title: "Batteries",
    image: "src/assets/img/catagory-Logo/batteries.png",
    link: "batteries",
  },
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


  return (
    <section className="categorie-layout1 py-5">
      <div className="container-fluid">
        <div className="title-area text-center mb-4">
          <div className="title-img mb-2">
            <img
              src="src/assets/img/icon/title-logo.png"
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
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                        margin: "0 auto",
                        padding: "15px",
                        borderRadius: "50%",
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

