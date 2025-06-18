// import React from 'react';
// import Slider from 'react-slick';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const HistorySection = () => {
//   const historyItems = [
//     {
//       title: 'Started with Tractor Tyres',
//       text: 'In the early days, we focused on providing durable and affordable tractor tyres to local farmers.',
//       year: '1990',
//     },
//     {
//       title: 'Expanded into Oils & Lubricants',
//       text: 'Recognizing demand, we started offering high-quality engine oils and greases for farming equipment.',
//       year: '1995',
//     },
//     {
//       title: 'Digital Ordering System',
//       text: 'Introduced an online platform allowing customers to place tyre and oil orders with ease.',
//       year: '2010',
//     },
//     {
//       title: 'All-in-One Farm Product Hub',
//       text: 'Became a trusted hub for tyres, lubricants, and maintenance products for agricultural machines.',
//       year: '2022',
//     },
//   ];

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     speed: 600,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: false,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       className="history-layout1 space"
//       style={{
//         backgroundImage: 'url(src/assets/img/bg/history-bg-1.jpg)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="container">
//         <div className="title-area wow fadeInUp wow-animated" data-wow-delay="0.3s">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="title-left">
//               <span className="sec-subtitle">Our Business Journey</span>
//               <h2 className="sec-title">Milestones of Our Growth</h2>
//             </div>
//           </div>
//         </div>

//         <Slider {...settings} className="mt-4">
//           {historyItems.map((item, index) => (
//             <div key={index}>
//               <div className="history-style1 text-center p-4 bg-white rounded shadow mx-2">
//                 <h2 className="history-title">{item.title}</h2>
//                 <p className="history-text">{item.text}</p>
//                 <span className="year d-block mt-3">{item.year}</span>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         <div className="border-shep mt-5 text-center">
//           <img
//             src="src/assets/img/shep/history-border.png"
//             alt="border decoration"
//             className="img-fluid"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HistorySection;





import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  const historyItems = [
    {
      title: 'Started with Tractor Tyres',
      text: 'In the early days, we focused on providing durable and affordable tractor tyres to local farmers.',
      year: '1990',
    },
    {
      title: 'Expanded into Oils & Lubricants',
      text: 'Recognizing demand, we started offering high-quality engine oils and greases for farming equipment.',
      year: '1995',
    },
    {
      title: 'Digital Ordering System',
      text: 'Introduced an online platform allowing customers to place tyre and oil orders with ease.',
      year: '2010',
    },
    {
      title: 'All-in-One Farm Product Hub',
      text: 'Became a trusted hub for tyres, lubricants, and maintenance products for agricultural machines.',
      year: '2022',
    },
  ];
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
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

const HistorySection = () => {
  return (
    <div className="history-layout1 mb-40 "  style={{
        backgroundImage: 'url(src/assets/img/bg/history-bg-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container">
        <div className="title-area wow fadeInUp wow-animated" data-wow-delay="0.3s">
          <div className="d-flex justify-content-between align-items-center">
            <div className="title-left">
              <span className="sec-subtitle">Our Business Journey</span>
              <h2 className="sec-title">Milestones of Our Growth</h2>
            </div>
          </div>
        </div>

        <Slider {...settings} className="mt-4">
          {historyItems.map((item, index) => (
            <div key={index}>
              <div className="history-style1 text-center p-4 bg-white rounded shadow mx-2">
                <h2 className="history-title">{item.title}</h2>
                <p className="history-text">{item.text}</p>
                <span className="year d-block mt-3">{item.year}</span>
              </div>
            </div>
          ))}
        </Slider>

        <div className="border-shep mt-5 text-center">
          <img
            src="src/assets/img/shep/history-border.png"
            alt="border decoration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
