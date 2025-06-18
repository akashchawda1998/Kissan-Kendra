import React from "react";
import { FaTractor, FaTools, FaPhoneAlt, FaOilCan, FaCogs, FaWrench } from "react-icons/fa";

const WhatWeProvide = () => {
  const services = [
    {
      icon: <FaTractor size={40} color="#4CAF50" />,
      title: "High-Quality Tractor Tyres",
      description: "Robust tyres designed for heavy-duty farming, ensuring better grip, fuel efficiency, and longer life on all terrains.",
    },
    {
      icon: <FaTools size={40} color="#2196F3" />,
      title: "Durable Agricultural Tractors",
      description: "We offer efficient, long-lasting tractors built to perform even in the toughest field conditions for daily farm use.",
    },
    {
      icon: <FaPhoneAlt size={40} color="#FF9800" />,
      title: "Expert Customer Support",
      description: "Our experienced team assists with product guidance, maintenance tips, and after-sales service to keep you productive.",
    },
    {
      icon: <FaOilCan size={40} color="#E91E63" />,
      title: "Premium Engine Oils",
      description: "Top-grade oils that reduce engine wear, control sludge, and enhance engine life for tractors and farm machines.",
    },
    {
      icon: <FaCogs size={40} color="#9C27B0" />,
      title: "Advanced Lubricants",
      description: "Our lubricants reduce friction, support high-performance output, and protect internal parts under extreme conditions.",
    },
    {
      icon: <FaWrench size={40} color="#795548" />,
      title: "Affordable Spare Parts",
      description: "We provide genuine and budget-friendly spare parts for tractors and equipment, ensuring quick repairs and uptime.",
    },
  ];

  return (
    <section
      className="provide-layout1 space"
      style={{
        backgroundImage: "url('src/assets/img/bg/provide-bg-1.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="provide-style1">
              <div
                className="title-area wow fadeInUp wow-animated"
                data-wow-delay="0.3s"
              >
                <span className="sec-subtitle">Welcome to Kissan Kendra</span>
                <h2 className="sec-title">What We Provide</h2>
              </div>

              <div className="row g-5">
                {services.map((item, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="provide-item d-flex align-items-start gap-3">
                      <div className="provide-icon">{item.icon}</div>
                      <div className="provide-content">
                        <h2 className="title h6">
                          <a href="service.html">{item.title}</a>
                        </h2>
                        <p className="text">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
