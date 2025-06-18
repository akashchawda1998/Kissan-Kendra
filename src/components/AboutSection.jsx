import React from "react";


// import aboutImg1 from "";
// import authorImg from "assets/img/about/about-author.png";
// import authorSignature from "src/assets/img/about/about-signature.png";
// import aboutImg2 from "assets/img/about/about-1-2.jpg";
// import aboutIcon1 from "assets/img/icon/about-icon-1-1.png";
// import aboutIcon2 from "assets/img/icon/about-icon-1-2.png";
// import shapeMockup from "assets/img/shep/about-shep-1.png";

const AboutSection = () => {
  return (
    <section className="about-layout1 space-top">
      <div className="container">
        <div className="row gx-5 justify-content-end">
          <div className="col-lg-6">
            <div className="about-img">
              <img src="src/assets/img/about/about-1-1.jpg" alt="about-image" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div
                className="title-area wow fadeInUp wow-animated"
                data-wow-delay="0.3s"
              >
                <span className="sec-subtitle">Welcome to Farmix</span>
                <h2 className="sec-title">
                  Agriculture & Organic Product Farm
                </h2>
              </div>
              <p className="about-text">
                Lorem ipsum dolor sit amet, porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut quaerat voluptatem.
              </p>
            </div>
            <div className="auther-info">
              <div className="auther-inner">
                <div className="auther-img">
                  <img src={authorImg} alt="about" />
                </div>
                <div className="auther-content">
                  <h6 className="name">Thomas Walkar</h6>
                  <span className="designation">founder - CEO</span>
                </div>
              </div>
              <div className="author-signature">
                <img src={authorSignature} alt="about-signature" />
              </div>
            </div>
          </div>

          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="about-bottom">
              <div className="row">
                <div className="col-lg-4">
                  <div className="item-img">
                    <img src={aboutImg2} alt="about img" />
                    <a
                      href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-style1 border1">
                    <div className="about-inner">
                      <div className="about-icon">
                        <img src={aboutIcon1} alt="icon" />
                      </div>
                      <h3 className="about-title">
                        <a href="service-details.html">
                          100% Guaranteed Organic Product
                        </a>
                      </h3>
                      <p className="about-text">
                        Lorem ipsum dolor sit amet, porro quisquam est, qui.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="about-style1">
                    <div className="about-inner">
                      <div className="about-icon">
                        <img src={aboutIcon2} alt="icon" />
                      </div>
                      <h3 className="about-title">
                        <a href="service-details.html">
                          Top-Quality Healthy Foods Production
                        </a>
                      </h3>
                      <p className="about-text">
                        Lorem ipsum dolor sit amet, porro quisquam est, qui.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup moving z-index-n1 d-none d-lg-block"
        style={{ right: "9%", bottom: "22%" }}
      >
        <img src={shapeMockup} alt="shapes" />
      </div>
    </section>
  );
};

export default AboutSection;
