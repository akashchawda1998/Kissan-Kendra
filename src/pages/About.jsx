import React from 'react'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import HistorySection from '../components/HistorySection'
import CounterSection from '../components/CounterSection'
import AboutTestimonial from '../components/AboutTestimonial'
import BrandsSection from '../components/BrandSection'
import Breadcrumb from '../components/BreadCrumb'

const About = () => {
  return (

    <>
    <Breadcrumb  title="About Us"
        paths={[{ name: "About Us" }]}/>
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
