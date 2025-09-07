import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Optional: use your icons (or keep built-in SVGs below)
import iconPhone from "../assets/img/icon/icon-1-1.png";
import iconEmail from "../assets/img/icon/icon-1-2.png";

export default function ContactAttractive() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", subject: "", message: "", consent: false,
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    if (!form.name) return "Please enter your name.";
    if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) return "Please enter a valid phone.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.subject) return "Please enter a subject.";
    if (!form.message) return "Please add a message.";
    if (!form.consent) return "Please accept the consent.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return setStatus({ ok: false, msg: err });
    try {
      // hook up your API here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
      setStatus({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      setForm({ name: "", phone: "", email: "", subject: "", message: "", consent: false });
    } catch {
      setStatus({ ok: false, msg: "Something went wrong. Please try again." });
    }
  };

  return (
    <main className="kx-contact">
      {/* Hero */}
      <header className="kx-hero position-relative overflow-hidden">
        <br></br>
        <br></br>
        <div className="container py-5 py-lg-6">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-white text-dark rounded-pill fw-semibold kx-chip">CONTACT US</span>
              <br></br>
              <h1 className="display-5 abc text-white mt-3">Let’s talk about your needs</h1>
              <p className="lead text-white-50 mb-0">
                Need help choosing tyres, oils, or farm tools? We’ll reply fast—usually within a few hours.
              </p>
            </div>
          </div>
        </div>
        <div className="kx-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,48 C240,120 480,0 720,48 C960,96 1200,72 1440,24 L1440,120 L0,120 Z"/></svg>
        </div>
      </header>

      {/* Content */}
      <section className="container py-5 py-lg-6">
        <div className="row g-4">
          {/* Form */}
          <div className="col-xl-8 col-lg-7">
            <div className="card border-0 shadow-sm kx-glass">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="kx-dot" /> <span className="text-uppercase text-muted small fw-semibold">Write to us</span>
                </div>
                <h2 className="abc mb-1">Get in touch with our team</h2>
                <p className="text-secondary mb-4">
                  Prefer phone? Call <a className="kx-link" href="tel:+919109626365">+91 9109-62-63-65</a>
                </p>

                {status && (
                  <div className={`alert ${status.ok ? "alert-success" : "alert-danger"}`} role="alert">
                    {status.msg}
                  </div>
                )}

                <form onSubmit={onSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" id="name" name="name" placeholder="Name" value={form.name} onChange={onChange} />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" id="phone" name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={onChange} />
                        <label htmlFor="phone">Phone</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" id="email" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input className="form-control" id="subject" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" id="message" name="message" placeholder="Message" style={{ height: 70 }} value={form.message} onChange={onChange} />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <button className="btn btn-dark btn-lg w-100" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-xl-4 col-lg-5">
            <div className="d-flex flex-column gap-3">
              <div className="card border-0 shadow-sm kx-card">
                <div className="card-body p-4">
                  <h3 className="h5 abc mb-3">Contact Details</h3>
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <span className="kx-icon">{iconPhone ? <img src={iconPhone} alt="phone" /> : "📞"}</span>
                    <div>
                      <div className="fw-semibold">Phone</div>
                      <a className="kx-link" href="tel:+919109626365">+91 9109-62-63-65</a>
                      <div className="mt-2"><a className="btn btn-outline-dark btn-sm" href="https://wa.me/919109626365" target="_blank" rel="noreferrer">WhatsApp us</a></div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <span className="kx-icon">{iconEmail ? <img src={iconEmail} alt="email" /> : "✉️"}</span>
                    <div>
                      <div className="fw-semibold">Email</div>
                      <a className="kx-link" href="mailto:info@kisaankendra.in">info@kisaankendra.in</a>
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>

        {/* Map with overlay */}
        <div className="position-relative mt-4 mt-lg-5">
          <div className="kx-map ratio ratio-21x9 rounded-4 overflow-hidden">
            <iframe
              title="Location"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482607495!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            />
          </div>
          <div className="kx-map-card shadow-sm">
            <div className="abc">Indore, Madhya Pradesh</div>
            <div className="text-secondary small mb-2">Serving across India</div>
            <a className="btn btn-dark btn-sm w-100" href="https://maps.google.com/?q=Indore" target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
