import React, { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesCarousel from "./CatagoryesCrousal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import EnquiryPage from "./Enquiry";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const handleToggleEnquiry = () => {
    setShowEnquiry(prev => !prev);
  };
  const handleToggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };
  const headerRef = useRef(null);
  const stickyRef = useRef(null);

    const toggleSubMenu = (menuKey) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("will-sticky");
        if (stickyRef.current) stickyRef.current.classList.add("sticky-active");
      } else {
        headerRef.current.classList.remove("will-sticky");
        if (stickyRef.current) stickyRef.current.classList.remove("sticky-active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu */}
         <div className={`vs-menu-wrapper${showMobileMenu ? " vs-body-visible" : ""}`}>
      <div className="vs-menu-area text-center">
        <button className="vs-menu-toggle" onClick={handleToggleMobileMenu}>
          <i className="fas fa-times"></i>
        </button>

        <div className="mobile-logo">
          <a href="/">
            <img
              src="https://kisaankendra.in/wp-content/uploads/2021/08/1-removebg-preview-1.png"
              alt="Farmix"
            />
          </a>
        </div>

        <div className="vs-mobile-menu">
          <ul>
            <li><a href="/">Home</a></li>

            {/* Tractors Dropdown */}
            <li className="menu-item-has-children">
              <a onClick={() => toggleSubMenu("tractors")}>
                Tractors 
              </a>
              {openMenus["tractors"] && (
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a onClick={() => toggleSubMenu("new-tractors")}>
                      New Tractors 
                    </a>
                    {openMenus["new-tractors"] && (
                      <ul className="sub-menu">
                        <li><a href="/productlist?category=167">Mahindra & Mahindra</a></li>
                        <li><a href="/productlist?category=180">Eicher</a></li>
                        <li><a href="/productlist?category=192">New Holland</a></li>
                        <li><a href="/tractor/swaraj">Swaraj</a></li>
                        <li><a href="/tractor/farmtrac">Farmtrac</a></li>
                        <li><a href="/tractor/captain">Captain</a></li>
                        <li><a href="/tractor/kubota">Kubota</a></li>
                        <li><a href="/tractor/sonalika">Sonalika</a></li>
                        <li><a href="/tractor/john-deere">John Deere</a></li>
                        <li><a href="/tractor/powertrac">Powertrac</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="/tractor/old">Old Tractors</a></li>
                  <li><a href="/tractor/parts">Tractor Parts</a></li>
                </ul>
              )}
            </li>

 {/* Agriculture */}
            <li className="menu-item-has-children">
              <a onClick={() => toggleSubMenu("agriculture")}>
                Agriculture 
              </a>
              {openMenus["agriculture"] && (
                <ul className="sub-menu">
                  <li><a href="/productlist?category=159">Agriculture Machine</a></li>
                  <li><a href="/productlist?category=157">Agriculture Pipes</a></li>
                  <li><a href="/productlist?category=155">Agriculture Pumps</a></li>
                </ul>
              )}
            </li>
            {/* Tyres Dropdown */}
            <li className="menu-item-has-children">
              <a
               onClick={() => toggleSubMenu("tyres")}>
                Tyres 
              </a>
              {openMenus["tyres"] && (
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a onClick={() => toggleSubMenu("car-tyres")}>
                      Car Tyres 
                    </a>
                    {openMenus["car-tyres"] && (
                      <ul className="sub-menu">
                        <li><a href="/tyre/car/bridgestone">Bridgestone</a></li>
                        <li><a href="/tyre/car/mrf">MRF</a></li>
                        <li><a href="/tyre/car/ceat">CEAT</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="/tyre/motorcycle-scooters">Motorcycle/Scooter Tyres</a></li>
                  <li><a href="/tyre/three-wheeler">Three Wheeler Tyres</a></li>
                  <li><a href="/tyre/tractor-farm">Tractor/Farm Tyres</a></li>
                </ul>
              )}
            </li>

            {/* Batteries */}
            <li className="menu-item-has-children">
              <a onClick={() => toggleSubMenu("batteries")}>
                Batteries 
              </a>
              {openMenus["batteries"] && (
                <ul className="sub-menu">
                  <li><a href="/productlist?category=156">Exide</a></li>
                  <li><a href="/productlist?category=158">Amaron</a></li>
                </ul>
              )}
            </li>

            {/* Lubrications */}
            <li className="menu-item-has-children">
              <a onClick={() => toggleSubMenu("lubrications")}>
                Lubrications 
              </a>
              {openMenus["lubrications"] && (
                <ul className="sub-menu">
                  <li><a href="/productlist?category=171">Brake Oil</a></li>
                  <li><a href="/productlist?category=163">Engine Oil</a></li>
                  <li><a href="/productlist?category=162">Gear Oil</a></li>
                  <li><a href="/productlist?category=160">Grease</a></li>
                </ul>
              )}
            </li>

           

            {/* Blog */}
            <li className="menu-item-has-children">
              <a onClick={() => toggleSubMenu("blog")}>
                Blog 
              </a>
              {openMenus["blog"] && (
                <ul className="sub-menu">
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/blog-details">Blog Details</a></li>
                </ul>
              )}
            </li>

            <li><a href="/about">About Us</a></li>


            {/* Contact */}
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

      {/* Header Section */}
      <header ref={headerRef} className="vs-header header-layout1">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row justify-content-between">
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <a href="mailto:info@example.com">info@kisaankendra.in</a>
                    </li>
                    <li>
                      <i className="fas fa-phone-alt"></i>
                      <a href="tel:+9191092626365">+91 91092626365</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-style1">
                  <a href="#" style={{ color: "white" }}><i className="fab fa-facebook-f"></i></a>
                  <a href="#" style={{ color: "white" }}><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" style={{ color: "white" }}><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Menu */}
        <div className="sticky-wrapper">
          <div ref={stickyRef} className="sticky-active">
            <div className="menu-area">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <div className="header-logo">
                      <a href="/">
                        <img src="https://kisaankendra.in/wp-content/uploads/2021/08/1-removebg-preview-1.png" alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col">
                    <nav className="main-menu menu-style1 d-none d-lg-block">
                      <ul>
                        <li><a href="/">Home</a></li>

                        {/* Tractors Menu */}
                        <li className="menu-item-has-children">
                          <a href="/tractor">Tractors</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/tractor">New Tractors</a>
                              <ul className="sub-menu">
                                <li><a href="/productlist?category=167">Mahindra & Mahindra</a></li>
                                <li><a href="/productlist?category=180">Eicher</a></li>
                                <li><a href="/productlist?category=192">New Holland</a></li>
                                <li><a href="/tractor/swaraj">Swaraj</a></li>
                                <li><a href="/tractor/farmtrac">Farmtrac</a></li>
                                <li><a href="/tractor/captain">Captain</a></li>
                                <li><a href="/tractor/kubota">Kubota</a></li>
                                <li><a href="/tractor/sonalika">Sonalika</a></li>
                                <li><a href="/tractor/john-deere">John Deere</a></li>
                                <li><a href="/tractor/powertrac">Powertrac</a></li>
                              </ul>
                            </li>                    <li><a href="/tractor/old">Old Tractors</a></li>
                            <li><a href="/tractor/parts">Tractor Parts</a></li>
                          </ul>
                        </li>
                            {/* Agriculture Menu */}
                        <li className="menu-item-has-children">
                          <a href="/agriculture">Agriculture</a>
                          <ul className="sub-menu">
                            <li><a href="/productlist?category=159">Agriculture Machine</a></li>

                            <li><a href="/productlist?category=157">Agriculture Pipes</a></li>
                            <li><a href="/productlist?category=155">Agriculture Pumps</a></li>
                          </ul>
                        </li>

                        {/* Tyres Menu */}
                        <li className="menu-item-has-children">
                          <a href="/tyre">Tyre</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="/tyre">Car Tyres</a>
                              <ul className="sub-menu">
                                <li><a href="/tyre/car/bridgestone">Bridgestone</a></li>
                                <li><a href="/tyre/car/mrf">MRF</a></li>
                                <li><a href="/tyre/car/ceat">CEAT</a></li>
                              </ul>
                            </li>
                            <li><a href="/tyre/motorcycle-scooters">Motorcycle/Scooter Tyres</a></li>
                            <li><a href="/tyre/three-wheeler">Three Wheeler Tyres</a></li>
                            <li><a href="/tyre/tractor-farm">Tractor/Farm Tyres</a></li>
                          </ul>

                        </li>

                        {/* Batteries Menu */}
                        <li className="menu-item-has-children">
                          <a href="/batteries">Batteries</a>
                          <ul className="sub-menu">
                            <li><a href="/productlist?category=156">Exide</a></li> {/* Page not made yet */}
                            <li><a href="/productlist?category=158">Amaron</a></li>
                          </ul>
                        </li>

                        {/* Lubrications Menu */}
                        <li className="menu-item-has-children">
                          <a href="/lubrications">Lubrications</a>
                          <ul className="sub-menu">
                            <li><a href="/productlist?category=171">Brake Oil</a></li> {/* Page not made yet */}
                            <li><a href="/productlist?category=163">Engine Oil</a></li>
                            <li><a href="/productlist?category=162">Gear Oil</a></li>
                            <li><a href="/productlist?category=160">Grease</a></li>
                          </ul>
                        </li>


<li className="menu-item-has-children">
                          <a href="/agriculture">Agriculture Drone</a>
                          <ul className="sub-menu">
                            <li><a href="/productlist?category=159">New Drone</a></li>

                            <li><a href="/productlist?category=157">Drone on Rent</a></li>
                          </ul>
                        </li>
                    

                        {/* Blog Menu */}
                                               <li><a href="/about">About Us</a></li>


                        <li><a href="/contact">Contact</a></li>
                      </ul>
                    </nav>
                  </div>

                  {/* Mobile menu button */}
                  <div className="col-auto d-lg-none">
                    <button className="vs-menu-toggle d-inline-block" onClick={handleToggleMobileMenu}>
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>

                  {/* Enquiry button */}
                  <div className="col-auto d-xl-block d-none">
                    <div className="header-icons">
                      <b href="#" onClick={handleToggleEnquiry} className="link-btn">Enquiry</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <style jsx>{`
          .link-btn {
            display: inline-block;
            padding: 8px 16px;
            border: 2px solid black;
            border-radius: 50px;
            text-decoration: none;
            color: black;
            transition: border 0.3s ease;
            cursor: pointer;
          }
          .link-btn:hover {
            border-color: green;
            color: green;
          }
          .enquiry-overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .enquiry-box {
            background: white;
            padding: 30px;
            border-radius: 8px;
            max-width: 400px;
            width: 90%;
            text-align: center;
          }
          .close-btn {
            background: red;
            color: white;
            border: none;
            padding: 6px 12px;
            margin-top: 10px;
            cursor: pointer;
          }
        `}</style>
      </header>

      {/* Enquiry Modal Overlay */}
      {showEnquiry && (
        // <div className="enquiry-overlay">
        //   <div className="enquiry-box">
        //     <h4>Enquiry Form</h4>
        //     <p>This is a sample enquiry modal.</p>
        //     <button className="close-btn" onClick={handleToggleEnquiry}>Close</button>
        //   </div>
        // </div>
        <EnquiryPage onClose={handleToggleEnquiry} />
      )}
    </>
  );
};

export default Navbar;
