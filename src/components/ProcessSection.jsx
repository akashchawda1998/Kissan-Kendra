import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// If images are static, import them like this:
import tyreImg from '../assets/img/welcometoKK/tyre.jpg';
import oilImg from '../assets/img/welcometoKK/oil.png';
import expertImg from '../assets/img/welcometoKK/Talktoexpert.jpg';
import orderImg from '../assets/img/welcometoKK/PlaceOrder.jpg';
import deliveryImg from '../assets/img/welcometoKK/fastDilivry.jpg';
import titleLogo from '../assets/img/icon/title-logo.png';

const processItems = [
  {
    img: tyreImg,
    title: 'Select Your Tyre',
    text: 'Choose from a wide range of high-performance tyres designed for all farming and transport needs.',
  },
  {
    img: oilImg,
    title: 'Pick the Right Oil',
    text: 'Browse our engine oils and lubricants to find what best suits your tractors and heavy machinery.',
  },
  {
    img: expertImg,
    title: 'Talk to Experts',
    text: 'Need help choosing? Our support team is always ready to guide you with expert advice.',
  },
  {
    img: orderImg,
    title: 'Place Your Order',
    text: 'Once satisfied, place your order easily through our online system or contact us directly.',
  },
  {
    img: deliveryImg,
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
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="process-layout1 space py-5">
      <div className="container">
        <div className="title-area text-center wow fadeInUp" data-wow-delay="0.3s">
          <div className="title-img mb-2">
            <img src={titleLogo} alt="title logo" style={{ height: '40px' }} />
          </div>
          <span className="sec-subtitle">Welcome to kisaan Kendra</span>
          <h2 className="sec-title">How We Help You Get What You Need</h2>
        </div>

        <Slider {...settings}>
          {processItems.map((item, index) => (
            <div key={index}>
              <div className="process-style1 text-center p-3">
                <div className="process-img mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      width: '278px',
                      height: '278px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      margin: '0 auto',
                    }}
                  />
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

      {/* Optional shape element */}
      {/* <div className="shape-mockup moving z-index d-none d-xl-block" style={{ left: '0%', top: '5%' }}>
        <img src="src/assets/img/shep/process-shep-1.png" alt="shapes" />
      </div> */}
    </section>
  );
};

export default ProcessSection;
