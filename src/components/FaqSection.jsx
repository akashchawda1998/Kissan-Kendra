import React from "react";

const faqItems = [
  {
    id: "collapseOne",
    question: "What types of tyres do you sell?",
    answer:
      "We offer a wide range of tyres including tractor tyres, trailer tyres, and other heavy-duty tyres suited for agricultural and industrial use.",
    show: true,
  },
  {
    id: "collapseTwo",
    question: "Do you provide engine oils and lubricants?",
    answer:
      "Yes, we offer a full range of high-performance engine oils and lubricants for tractors, trucks, and farming equipment to ensure long engine life.",
    show: false,
  },
  {
    id: "collapseThree",
    question: "Can I buy spare parts for tractors here?",
    answer:
      "Absolutely. We stock reliable and durable spare parts for a variety of tractor models, including filters, belts, brake pads, and more.",
    show: false,
  },
  {
    id: "collapseFour",
    question: "Do you offer warranty or customer support?",
    answer:
      "Yes, all our products come with a standard warranty and our dedicated support team is available to assist with installation or usage issues.",
    show: false,
  },
];

const FaqSection = () => {
  return (
    <section className="faq-layout1 space-bottom">
      <div className="container">
        <div className="row gx-5">
          {/* FAQ Text Content */}
          <div className="col-lg-6">
            <div className="title-area wow fadeInUp" data-wow-delay="0.3s">
              <span className="sec-subtitle">Have Questions?</span>
              <h2 className="sec-title">Frequently Asked Questions</h2>
            </div>

            <div className="accordion-style1">
              <div className="accordion" id="accordionExample">
                {faqItems.map((item, index) => (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          item.show ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded={item.show ? "true" : "false"}
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        item.show ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Image */}
          <div className="col-lg-6">
            <div className="faq-img">
              <div className="faq-img1">
                <img src="src/assets/img/faq/faq-1-1.jpg" alt="faq 1" />
              </div>
              <div className="faq-img2">
                <img src="src/assets/img/faq/faq-1-2.jpg" alt="faq 2" />
              </div>
              <div className="media-box1">
                <span className="media-info">100%</span>
                <p className="media-text">client satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
