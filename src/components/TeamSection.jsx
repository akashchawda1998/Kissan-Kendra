import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const teamMembers = [
  {
    name: "Porla Romin",
    role: "Head of Farmer",
    contact: "+88 013 00 44 51",
    image: "src/assets/img/team/team-1-1.png",
  },
  {
    name: "Moniqa Lind",
    role: "Head of Farmer",
    contact: "+88 013 00 44 51",
    image: "src/assets/img/team/team-1-1.png",
  },
  {
    name: "Porla Romin",
    role: "Head of Farmer",
    contact: "+88 013 00 44 51",
    image: "src/assets/img/team/team-1-1.png",
  },
  {
    name: "Porla Romin",
    role: "Head of Farmer",
    contact: "+88 013 00 44 51",
    image: "src/assets/img/team/team-1-1.png",
  },
];

const TeamSection = () => {
 const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false, // Disable to prevent partial logos
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 6},
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

  return (
    <section className="team-layout1 space">
      <div className="container">
        <div
          className="title-area text-center wow fadeInUp wow-animated"
          data-wow-delay="0.3s"
        >
          <div className="title-img">
            <img src="src/assets/img/icon/title-logo.png" alt="title logo" />
          </div>
          <span className="sec-subtitle">Meet Our Experts</span>
          <h2 className="sec-title">Qualified Formers</h2>
        </div>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-2">
              <div className="team-style1">
                <div className="team-content">
                  <h4 className="team-name">{member.name}</h4>
                  <span className="team-degi">{member.role}</span>
                  <a href="#" className="team-contact">
                    {member.contact}
                  </a>
                  <div className="social-style1">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="team-img">
                  <img src={member.image} alt="team img" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;



