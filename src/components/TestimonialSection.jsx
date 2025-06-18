import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    text: `I purchased tractor tyres and engine oil from this site — excellent quality and fast delivery. My tractor performance has improved a lot.`,
    name: "Ramesh Patidar",
    designation: "Farmer, Indore",
    image: "src/assets/img/testimonial/testi-img-1-1.png",
  },
  {
    text: `Bought a battery and some farm tools recently. The service team helped me choose the right product. Highly satisfied with the support.`,
    name: "Sohan Verma",
    designation: "Agro Dealer, Ujjain",
    image: "src/assets/img/testimonial/testi-img-1-1.png",
  },
  {
    text: `Their lubricants and tractor accessories are very reliable. I recommend this store for every farmer who wants durable products at good prices.`,
    name: "Lakshmi Yadav",
    designation: "Tractor Owner, Seoni",
    image: "src/assets/img/testimonial/testi-img-1-1.png",
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const TestimonialSection = () => {
  return (
    <section
      className="brand-layout1 space"
      style={{
        backgroundImage: `url('src/assets/img/bg/testi-bg-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
          <span className="sec-subtitle">What Does The Customer Have To Say?</span>
          <h2 className="sec-title">Clients Testimonials</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <Slider {...sliderSettings}>
              {testimonials.map((item, index) => (
                <div className="testi-style2" key={index}>
                  <p className="testi-text">{item.text}</p>
                  <div className="auther-inner">
                    <div className="auther-img">
                      <img src={item.image} alt="testimonial" />
                      <div className="testi-icon">
                        <i className="far fa-quote-left"></i>
                      </div>
                    </div>
                    <div className="auther-content">
                      <h3 className="name h5">{item.name}</h3>
                      <span className="designation">{item.designation}</span>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i className="fas fa-star" key={i}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
