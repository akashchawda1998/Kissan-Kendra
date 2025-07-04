import React from 'react'
import HeroSlider from '../components/HeroSlider'
import CategoriesCarousel from '../components/CatagoryesCrousal'
import ProductSection from '../components/ProductSection'
import WhatWeProvide from '../components/WhatWeProvide'
import TeamSection from '../components/TeamSection'
import FaqSection from '../components/FaqSection'
import TestimonialSection from '../components/TestimonialSection'
import BlogSection from '../components/BlogSection'
import BrandsSection from '../components/BrandSection'


const Home = () => {
  return (
    <>
      <HeroSlider />
      <CategoriesCarousel />
      <section className="about-layout2 space-bottom" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="about-content">
                <div
                  className="title-area wow fadeInUp wow-animated"
                  data-wow-delay="0.3s"
                >
                  <span className="sec-subtitle">Welcome to Kissan Kendra</span>
                </div>
                <p className="about-text">
                  We offer a wide range of agricultural products including tractors, batteries, tires, motors, and more. Our products are trusted by thousands of farmers for their reliability, durability, and performance in the field. Whether you’re looking to upgrade your machinery or maintain your equipment, Kisaan Kendra has you covered. Experience quality and productivity with every purchase. Your one-stop destination for all agricultural needs—helping farmers grow better every day.          </p>


                <div className="bottom-info">
                  <div className="text-box">
                    <h6 className="nunber">2+</h6>
                    <span className="experience">
                      years of <br />
                      excellence
                    </span>
                  </div>
                  <div className="author-signature">
                    <img
                      src="src/assets/img/about/about-signature.png"
                      alt="about-signature"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right image side */}
            <div className="col-lg-6">
              <div className="about-img">
                {/* <div className="about-logo">
            <img
              src="src/assets/img/service/selling-img-1-2.png"
              alt="white logo 2"
            />
          </div> */}
                <img
                  src="src/assets/img/about/about-1-2(2).png"
                  alt="Tractor"
                  style={{height:"450px", objectFit: "cover", borderRadius: "10px" }}
                  className="img1"
                />
                {/* <img
                  src="src/assets/img/about/about-1-1(4).png"
                  style={{ width: "350px", height: "500px", objectFit: "cover", borderRadius: "10px" }}
                  alt="Tyres & Lubricants"
                  className="img2"
                /> */}
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <ProductSection /> */}
      <WhatWeProvide />
      {/* <TeamSection /> */}
      <FaqSection />
      {/* <TestimonialSection /> */}
      <BlogSection />
      <BrandsSection />

    </>
  )
}

export default Home



{/* Deal Section */ }
<div className="about-deal">
  <div className="row gy-5 gx-5 align-items-center">
    <div className="col-lg-6">
      <div className="row g-4">
        {[
          { img: "deal-1-1.png", title: "Tractor Tyres" },
          { img: "deal-1-2.png", title: "Farm Tractors" },
          { img: "deal-1-3.png", title: "Engine Oil" },
          { img: "deal-1-4.png", title: "Hydraulic Fluid" },
          { img: "deal-1-5.png", title: "Transmission Oil" },
          { img: "deal-1-6.png", title: "Grease & Lubricants" },
        ].map((item, index) => (
          <div className="col-xl-4 col-md-4 col-6" key={index}>
            <div className="deal-item">
              <a href="#">
                <img
                  src={`src/assets/img/about/${item.img}`}
                  alt={item.title}
                />
                <p className="deal-title">{item.title}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Offer Section */}
    <div className="col-lg-6">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6 px-0">
          <div className="deal-offer">
            <span className="offer-subtitle">Featured Combo</span>
            <h2 className="offer-title h3">Tyre + Oil Pack</h2>
            <p className="offer-text">High-Performance Combo Deal</p>
            <span className="price">
              <del>₹25,000</del> ₹21,000
            </span>
            <a href="shop.html" className="vs-btn">
              Shop Now
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 px-0">
          <div className="dela-img">
            <img
              src="src/assets/img/about/deal-offer1.png"
              alt="Tractor Deal"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>