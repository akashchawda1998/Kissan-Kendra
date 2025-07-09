import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images instead of using raw paths
import bgImage from '../assets/img/about/about-bg-agriculture.jpg';
import titleLogo from '../assets/img/icon/title-logo.png';
import icon1 from '../assets/img/icon/counter-icon1.png';
import icon2 from '../assets/img/icon/counter-icon2.png';
import icon3 from '../assets/img/icon/counter-icon3.png';
import icon4 from '../assets/img/icon/counter-icon4.png';

const countersData = [
  {
    icon: icon1,
    count: 1200,
    suffix: <i className="far fa-plus"></i>,
    text: 'Tractor Tyres Sold',
  },
  {
    icon: icon2,
    count: 100,
    suffix: <i className="far fa-percent"></i>,
    text: 'Customer Satisfaction',
  },
  {
    icon: icon3,
    count: 500,
    suffix: <i className="far fa-plus"></i>,
    text: 'Lubricant Deliveries',
  },
  {
    icon: icon4,
    count: 250,
    suffix: <i className="far fa-plus"></i>,
    text: 'Tractor Owners Served',
  },
];

const CounterSection = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const intervals = [];

    countersRef.current.forEach((el, index) => {
      let current = 0;
      const target = countersData[index].count;
      const increment = Math.max(1, Math.ceil(target / 100));

      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          el.innerText = target;
          clearInterval(intervals[index]);
        } else {
          el.innerText = current;
        }
      };

      intervals[index] = setInterval(updateCounter, 20);
    });

    // Cleanup intervals on unmount
    return () => intervals.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <section
      className="counter-layout1 space py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="title-area wow fadeInUp" data-wow-delay="0.3s">
              <div className="title-img mb-3">
                <img src={titleLogo} alt="title logo" style={{ height: '40px' }} />
              </div>
              <h2 className="sec-title">Driving Agriculture Forward</h2>
              <span className="sec-subtitle d-block mb-3">
                Empowering farmers with premium tyres, oils, and expert service
              </span>
              <a href="#" className="vs-btn">
                Start Discussion!
              </a>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {countersData.map((counter, index) => (
            <div className="col-xl-auto col-lg-4 col-md-6 text-center" key={index}>
              <div className="media-style">
                <div className="media-inner">
                  <div className="media-icon mb-3">
                    <img src={counter.icon} alt="counter icon" style={{ height: '40px' }} />
                  </div>
                  <div className="media-counter d-flex align-items-center justify-content-center">
                    <h2
                      className="media-title counter-number mb-0"
                      ref={(el) => (countersRef.current[index] = el)}
                    >
                      0
                    </h2>
                    <span className="media-count_icon ms-2">{counter.suffix}</span>
                  </div>
                  <p className="media-text mt-2">{counter.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Shape Layer */}
      {/* <div className="shape-mockup moving z-index d-none d-lg-block" style={{ right: '8%', bottom: '22%' }}>
        <img src="src/assets/img/shep/about-shep-1.png" alt="shapes" />
      </div> */}
    </section>
  );
};

export default CounterSection;
