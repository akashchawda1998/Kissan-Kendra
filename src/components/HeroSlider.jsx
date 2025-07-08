import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Autoplay, EffectFade } from "swiper/modules";

const HeroSlider = () => {
  const slides = [
    {
      img: "src/assets/banner2.png",
    },
    {
      img: "src/assets/img/hero/hero-img-2-2.png",
    },
    {
      img: "src/assets/img/hero/hero-img-2-3.png",
    },
  ];

  return (
    <div className="hero-layout2 ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              
              }}
            >
              <div className="container">
                <div className="row g-5 align-items-center justify-content-between">
                  <div className="col-lg-6">
                    {/* Optional Hero Content */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
