import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-layout1 space">
      <div className="container">
        <div className="row">
          {/* Left Column - Form */}
          <div className="col-xl-8 col-lg-7">
            <div
              className="title-area wow fadeInUp wow-animated"
              data-wow-delay="0.3s"
            >
              <span className="sec-subtitle">CONTACT US</span>
              <h2 className="sec-title">
                We're Here to Help You. Get in Touch with Our Team!
              </h2>
            </div>
            <div className="vs-comment-form">
              <div id="respond" className="comment-respond">
                <div className="form-title">
                  <p className="form-text">
                    Please fill out the form below and one of our recruitment
                    specialists will back in touch shortly.
                  </p>
                </div>
                <form
                  action="https://html.vecurosoft.com/farmix/demo/mail.php"
                  method="post"
                  className="form-style3 ajax-contact"
                >
                  <div className="row">
                    <div className="col-12 form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        name="fname"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-6 form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <div className="custom-checkbox notice">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />
                        <label htmlFor="wp-comment-cookies-consent">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div className="col-12 form-group">
                      <button className="vs-btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messages mb-0 mt-3"></p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="col-xl-4 col-lg-5">
            <div className="contact-left">
              {/* <div className="auther-inner">
                <div className="auther-img">
                  <img
                    src="src/assets/img/about/about-author.png"
                    alt="about"
                  />
                </div>
                <div className="auther-content">
                  <h6 className="name">Thomas Walkar</h6>
                  <span className="designation">founder - CEO</span>
                  <img
                    src="src/assets/img/about/contact-signature.png"
                    alt="contact"
                  />
                </div>
              </div> */}

              <div className="team-media">
                <h2 className="contact-title">Contact Us</h2>

                <div className="media-style1">
                  <div className="media-icon">
                    <img src="src/assets/img/icon/icon-1-1.png" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">Phone No:</h3>
                    <p className="media-info">
                      <a href="tel:+88013004451">+91 91092626365</a> <br />
                      Mon - Sat: 09.00 to 06.00
                    </p>
                  </div>
                </div>

                <div className="media-style1">
                  <div className="media-icon">
                    <img src="src/assets/img/icon/icon-1-2.png" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">Email Address:</h3>
                    <p className="media-info">
                      <a href="mailto:example@domain.com">
                        info@kissankendra.in
                      </a>
                      <br />
                      <a href="mailto:officename@example.com">
                        info@kissankendra.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="media-style1">
                  <div className="media-icon">
                    <img src="src/assets/img/icon/icon-1-3.png" alt="icon" />
                  </div>
                  <div className="media-body">
                    <h3 className="media-title">Location:</h3>
                    <p className="media-info">
                      5919 Trussville Crossings Pkwy, Birmingham, United
                      Kingdom
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="map mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49482607495!2d75.69903738855072!3d22.72388828988633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1751607583739!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
