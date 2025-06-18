import React from "react";

const FAQContact = () => {
  return (
    <section className="faq-layout1 space-bottom">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-12">
            <div
              className="title-area text-center wow fadeInUp wow-animated"
              data-wow-delay="0.3s"
            >
              <span className="sec-subtitle">Any Question Please?</span>
              <h2 className="sec-title">Common Questions & Answers</h2>
            </div>

            <div className="accordion-style1">
              <div className="accordion" id="accordionExample">
                
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What types of tyres do you offer for tractors and machinery?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We offer a wide range of tractor and agricultural machinery tyres including front and rear tractor tyres, tubeless tyres, and heavy-duty tyres for different soil and terrain types.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you sell batteries for all types of farming vehicles?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, we provide high-performance batteries suitable for tractors, harvesters, and other agricultural machines. Our batteries come with excellent cold cranking and long service life.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What engine oils and lubricants do you recommend for tractors?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We offer premium engine oils, hydraulic oils, and lubricants formulated for agricultural engines. These products improve performance, reduce wear, and ensure longer engine life even under tough field conditions.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Do you sell complete agricultural machines or only parts?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      We sell both complete agricultural machines like cultivators, rotavators, and power tillers, as well as spare parts and accessories. You can find all essential farming equipment under one roof.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I place bulk orders for tyres or lubricants?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Absolutely! We support bulk orders for tyres, lubricants, and batteries at competitive rates. Contact our sales team for special pricing, delivery options, and distributor partnerships.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;
