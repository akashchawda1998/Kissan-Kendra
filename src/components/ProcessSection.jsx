import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Assets (swap with your real paths)
import titleLogo from "../assets/img/icon/title-logo.png";
import heroImg from "../assets/img/welcometoKK/Talktoexpert.jpg";
import tyreImg from "../assets/img/welcometoKK/tyre.jpg";
import oilImg from "../assets/img/welcometoKK/oil.png";
import orderImg from "../assets/img/welcometoKK/PlaceOrder.jpg";
import deliveryImg from "../assets/img/welcometoKK/fastDilivry.jpg";

export default function AboutKisaanKendraCreative() {
  const features = [
    { title: "Quality you can trust", text: "Vetted, durable brands built for Indian farms." },
    { title: "Farmer-first guidance", text: "Real humans. Real advice. Zero jargon." },
    { title: "Fair & transparent pricing", text: "No hidden fees. No surprises." },
    { title: "Fast, safe delivery", text: "From warehouse to kheti, quickly & safely." },
    { title: "Pan-India reach", text: "Serving districts across Bharat." },
    { title: "After-sales support", text: "We stay until you’re truly set." },
  ];

  const timeline = [
    { k: "01", t: "Understand Your Need", d: "Call/WhatsApp; tell us your crop, land, and usage." },
    { k: "02", t: "Curate Best Options", d: "We shortlist tyres, oils, or tools that fit your budget." },
    { k: "03", t: "Transparent Pricing", d: "Get clear quotes—brand, spec, warranty, delivery." },
    { k: "04", t: "Place Order", d: "Easy checkout or assisted order with our team." },
    { k: "05", t: "Delivery & Setup", d: "Fast delivery; guidance for usage & maintenance." },
  ];

  const marquee = [
    "Tractors & Implements",
    "Batteries",
    "Farm Machinery",
    "Seeds",
    "Fertilizers",
    "Pesticides",
    "Organic Solutions",
    "Tractor Tyres",
  ];

  return (
    <main className="kkc">
      {/* HERO */}
      <section className="kkc-hero position-relative overflow-hidden">
        <div className="container py-5 py-lg-6 position-relative">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 mb-3 kkc-chip">
                <img src={titleLogo} alt="Kisaan Kendra" height={28} />
                <span>Har Kisaan Ka Saathi</span>
              </div>
              <h1 className="display-6 text-white mb-3">
                Kisaan Kendra — <span className="kkc-accent">About Us</span>
              </h1>
              <p className="lead text-white-50 mb-4">
                Your one-stop farm partner for tractors, tyres, batteries, oils, seeds,
                fertilizers, and more—backed by farmer-first guidance, fair pricing, and fast delivery.
              </p>
              <div className="d-flex gap-2">
                <a href="#why" className="btn btn-light btn-lg shadow-sm">Why choose us</a>
                <a href="#contact" className="btn btn-outline-light btn-lg">Talk to an expert</a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="kkc-hero-art">
                <img src={heroImg} alt="Farmer consulting an expert" />
                {/* floating badges */}
                <div className="kkc-float kkc-float-1">ISO Grade Oils</div>
                <div className="kkc-float kkc-float-2">Premium Tyres</div>
                <div className="kkc-float kkc-float-3">24×7 Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* wave bottom */}
        <div className="kkc-wave kkc-wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,48 C240,120 480,0 720,48 C960,96 1200,72 1440,24 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="kkc-marquee-wrap">
        <div className="kkc-marquee">
          <ul>
            {marquee.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
          <ul aria-hidden="true">
            {marquee.map((m, i) => <li key={`dup-${i}`}>{m}</li>)}
          </ul>
        </div>
      </section>

      {/* STORY */}
      <section className="container py-5 py-lg-6">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Rooted in Fields. Built for Farmers.</h2>
            <p className="text-secondary">
              We’re more than a store—we are a growing ecosystem for India’s growers.
              From your first sowing to your biggest harvest, we deliver products and guidance
              you can rely on. Real products. Real prices. Real support.
            </p>
            <div className="kkc-note mt-3">
              When the kisaan grows, <strong>Bharat grows. 🇮🇳</strong>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="kkc-duo">
              <div className="kkc-duo-card">
                <img src={tyreImg} alt="High-performance tractor tyres" />
                <span className="kkc-duo-label">Tyres</span>
              </div>
              <div className="kkc-duo-card">
                <img src={oilImg} alt="Engine oils and lubricants" />
                <span className="kkc-duo-label">Oils</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - diagonal grid */}
      <section id="why" className="kkc-why py-5 py-lg-6">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="f">Why Farmers Pick Us</h2>
            <p className="text-secondary">Reliable brands, honest advice, and service that stays.</p>
          </div>

          <div className="kkc-grid">
            {features.map((f) => (
              <article key={f.title} className="kkc-card">
                <h5 className="mb-1">{f.title}</h5>
                <p className="text-secondary mb-0">{f.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* wave top */}
        <div className="kkc-wave kkc-wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,72 C240,24 480,96 720,48 C960,0 1200,36 1440,96 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container py-5 py-lg-6">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-3">How We Help</h2>
            <p className="text-secondary">
              A simple, human workflow—from understanding your need to delivery & setup.
            </p>
          </div>
          <div className="col-lg-7">
            <ol className="kkc-timeline">
              {timeline.map((item) => (
                <li key={item.k} className="kkc-tl-item">
                  <div className="kkc-tl-bullet">{item.k}</div>
                  <div className="kkc-tl-content">
                    <h6 className="mb-1">{item.t}</h6>
                    <p className="text-secondary mb-0">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="kkc-gallery py-5">
        <div className="container">
          <div className="row g-3">
            {[tyreImg, oilImg, orderImg, deliveryImg].map((img, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="kkc-gcard">
                  <img src={img} alt={`Gallery ${i + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="kkc-cta py-5 py-lg-6">
        <div className="container d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
          <div>
            <h3 className="fw-bold mb-1">Ready to grow with Kisaan Kendra?</h3>
            <p className="text-secondary mb-0">Call us or explore the catalogue. We’re here for you.</p>
          </div>
          <div className="d-flex gap-2">
            <a href="tel:+910000000000" className="btn btn-dark btn-lg">Call Now</a>
            <a href="/catalogue" className="btn btn-outline-dark btn-lg">View Catalogue</a>
          </div>
        </div>
      </section>
    </main>
  );
}
