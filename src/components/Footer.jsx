import React from "react";

// Import local images
import icon1 from "../assets/img/icon/icon-1-1.png";
import icon2 from "../assets/img/icon/icon-1-2.png";
import icon3 from "../assets/img/icon/icon-1-3.png";
import footerBg from "../assets/img/bg/footer-bg-1-1.jpg";

const Footer = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Top Contact Section */}
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            {/* Phone */}
            <div className="col-lg-6 col-md-6">
              <div className="media-style1">
                <div className="media-icon">
                  <img src={icon1} alt="Phone Icon" />
                </div>
                <div className="media-body">
                  <h3 className="media-title">Call Us:</h3>
                  <p className="media-info">
                    <a href="tel:+917000000000">+91 91092626365</a>
                    <br />
                    Mon - Sat: 09.00 to 06.00
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-6 col-md-6">
              <div className="media-style1">
                <div className="media-icon">
                  <img src={icon2} alt="Email Icon" />
                </div>
                <div className="media-body">
                  <h3 className="media-title">Email Us:</h3>
                  <p className="media-info">
                    <a href="mailto:support@kisaankendra.in">support@kisaankendra.in</a>
                    <br />
                    <a href="mailto:info@kisaankendra.in">info@kissankendra.in</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="media-style1">
                <div className="media-icon">
                  <img src={icon3} alt="Location Icon" />
                </div>
                <div className="media-body">
                  <h3 className="media-title">Head Office:</h3>
                  <p className="media-info">
                    Kisaan Kendra, 123 Agri Lane, Farm City, India
                    <br />
                    <a href="" target="_blank" rel="noopener noreferrer">
                      View on Map
                    </a>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Footer Widget Area */}
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-center">
            {/* About */}
            <div className="col-xl-4 col-md-6">
              <div className="widget footer-widget">
                <div className="vs-widget-about">
                                 <h3 className="widget_title">Kisaan Kendra</h3>

                  <p className="footer-text">
                    Kisaan Kendra is your one-stop shop for farm essentials—tractors, batteries,
                    agricultural machinery, and durable tractor tyres—all at competitive prices.
                  </p>
                  <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-2 col-md-3">
              <div className="widget widget_categories footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/products">Our Products</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/faq">FAQs</a></li>
                </ul>
              </div>
            </div>

            {/* Product Categories */}
            <div className="col-xl-2 col-md-3">
              <div className="widget widget_categories footer-widget">
                <h3 className="widget_title">Categories</h3>
                <ul>
                  <li><a href="/tractors">Tractors</a></li>
                  <li><a href="/batteries"> Batteries</a></li>
                  <li><a href="/tyres">Tractor Tyres</a></li>
                  <li><a href="/tools">Agri Tools</a></li>
                   <li><a href="/tools">Lubricants</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-xl-4">
              <div className="widget widget_newsletter footer-widget">
                <h4 className="widget_title">Subscribe for Offers</h4>
                <form className="newsletter-form">
                  <p className="form_text">
                    Get the latest deals, updates, and farming tips directly in your inbox.
                  </p>
                  <div className="search-btn">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Enter your email...."
                    />
                    <button type="submit" className="icon-btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-center align-items-center">
            <div className="col-auto">
              <p className="copyright-text">
                © 2025 <a href="/">Kisaan Kendra</a>. All rights reserved.
              </p>
            </div>
            <div className="col-auto">
              <div className="copyright-menu">
                <ul className="list-unstyled">
                  <li><a href="/sitemap">Sitemap</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
