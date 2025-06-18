import React from 'react'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import HistorySection from '../components/HistorySection'
import CounterSection from '../components/CounterSection'
import AboutTestimonial from '../components/AboutTestimonial'
import BrandsSection from '../components/BrandSection'

const About = () => {
  return (

    <>
  <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661899527223-c06e32f15dcd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D)",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat" }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">About us</h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="index.html">Home</a></li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
    {/* <AboutSection/> */}
    <ProcessSection/>
    <HistorySection/>
    <CounterSection/>
    <AboutTestimonial/>
    <BrandsSection/>

    </>
     

  )
}

export default About
