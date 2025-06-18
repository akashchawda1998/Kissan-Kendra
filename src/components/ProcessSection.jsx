import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const processItems = [
  {
    img: 'https://img.freepik.com/free-vector/car-wheel-tires-stacked-top-each-other-realistic-composition-white-background-vector-illustration_1284-82101.jpg?ga=GA1.1.1540081063.1740168253&semt=ais_hybrid&w=740',
    title: 'Select Your Tyre',
    text: 'Choose from a wide range of high-performance tyres designed for all farming and transport needs.',
  },
  {
    img: 'https://img.freepik.com/premium-photo/pouring-engine-oil-from-its-plastic-container_33882-189.jpg?ga=GA1.1.1540081063.1740168253&semt=ais_hybrid&w=740',
    title: 'Pick the Right Oil',
    text: 'Browse our engine oils and lubricants to find what best suits your tractors and heavy machinery.',
  },
  {
    img: 'https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-77063.jpg?ga=GA1.1.1540081063.1740168253&semt=ais_hybrid&w=740',
    title: 'Talk to Experts',
    text: 'Need help choosing? Our support team is always ready to guide you with expert advice.',
  },
  {
    img: 'https://img.freepik.com/free-vector/cash-delivery-concept-illustration_23-2148755957.jpg?ga=GA1.1.1540081063.1740168253&semt=ais_hybrid&w=740',
    title: 'Place Your Orderr',
    text: 'Once satisfied, place your order easily through our online system or contact us directly.',
  },
  {
    img: 'https://img.freepik.com/free-vector/express-courier-delivery-professional-postal-service-cargo-transportation-business-gods-distribution-home-delivering-idea-design-element_335657-34.jpg?ga=GA1.1.1540081063.1740168253&semt=ais_hybrid&w=740',
    title: 'Fast Delivery',
    text: 'We deliver your products safely and quickly, right to your doorstep or farm.',
  },
];

const ProcessSection = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="process-layout1 space">
      <div className="container">
        <div
          className="title-area text-center wow fadeInUp wow-animated"
          data-wow-delay="0.3s"
        >
          <div className="title-img">
            <img src="src/assets/img/icon/title-logo.png" alt="title logo" />
          </div>
          <span className="sec-subtitle">Welcome to Kissan Kendra</span>
          <h2 className="sec-title">How We Help You Get What You Need</h2>
        </div>

        <Slider {...settings}>
          {processItems.map((item, index) => (
            <div key={index}>
              <div className="process-style1 text-center p-3">
                <div className="process-img mb-3">
                  <img src={item.img} style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", width: "278px", height: "278px"
                  }} alt="process" className="img-fluid" />
                </div>
                <div className="process-content">
                  <h3 className="process-title h5">
                    <a href="/service-details.html">{item.title}</a>
                  </h3>
                  <p className="process-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="shape-mockup moving z-index d-none d-xl-block"
        style={{ left: '0%', top: '5%' }}
      >
        <img src="src/assets/img/shep/process-shep-1.png" alt="shapes" />
      </div>
    </section>
  );
};

export default ProcessSection;
