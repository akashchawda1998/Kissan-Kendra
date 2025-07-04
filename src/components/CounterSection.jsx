import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const countersData = [
  {
    icon: 'src/assets/img/icon/counter-icon1.png',
    count: 1200,
    suffix: <i className="far fa-plus"></i>,
    text: 'Tractor Tyres Sold',
  },
  {
    icon: 'src/assets/img/icon/counter-icon2.png',
    count: 100,
    suffix: <i className="far fa-percent"></i>,
    text: 'Customer Satisfaction',
  },
  {
    icon: 'src/assets/img/icon/counter-icon3.png',
    count: 500,
    suffix: <i className="far fa-plus"></i>,
    text: 'Lubricant Deliveries',
  },
  {
    icon: 'src/assets/img/icon/counter-icon4.png',
    count: 250,
    suffix: <i className="far fa-plus"></i>,
    text: 'Tractor Owners Served',
  },
];

const CounterSection = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      let current = 0;
      const target = countersData[index].count;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          el.innerText = target;
          clearInterval(timer);
        } else {
          el.innerText = current;
        }
      };

      const timer = setInterval(updateCounter, 20);
    });
  }, []);

  return (
    <section
      className="counter-layout1 space"
      style={{
        backgroundImage: 'url(src/assets/img/about/about-bg-agriculture.jpg',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="title-area text-center wow fadeInUp wow-animated"
              data-wow-delay="0.3s"
            >
              <div className="title-img">
                <img src="src/assets/img/icon/title-logo.png" alt="title logo" />
              </div>
              <h2 className="sec-title">Driving Agriculture Forward</h2>
              <span className="sec-subtitle">
                Empowering farmers with premium tyres, oils, and expert service
              </span>
              <a href="#" className="vs-btn">
                Start Discussion!
              </a>
            </div>
          </div>
        </div>

        <div className="row z-index-common g-5 justify-content-lg-between justify-content-center">
          {countersData.map((counter, index) => (
            <div className="col-xl-auto col-lg-4 col-md-6" key={index}>
              <div className="media-style">
                <div className="media-inner">
                  <div className="media-icon">
                    <div className="icon">
                      <img src={counter.icon} alt="counter-icon" style={{height:"35px"}} />
                    </div>
                  </div>
                  <div className="media-counter">
                    <div className="media-count">
                      <h2
                        className="media-title counter-number"
                        ref={(el) => (countersRef.current[index] = el)}
                      >
                        {counter.count}
                      </h2>
                      <span className="media-count_icon">{counter.suffix}</span>
                    </div>
                    <p className="media-text">{counter.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="shape-mockup moving z-index d-none d-lg-block"
        style={{ right: '8%', bottom: '22%' }}
      >
        {/* <img src="src/assets/img/shep/about-shep-1.png" alt="shapes" /> */}
      </div>
    </section>
  );
};

export default CounterSection;
