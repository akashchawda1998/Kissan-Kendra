import React from 'react'
import ContactSection from '../components/ContactSection'
import FAQContact from '../components/FAQContact'

const Contact = () => {
  return (
    <>
      <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1732139715621-6f5a0f7e1435?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhcm0lMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D)",  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat" }}
    >
      <div className="container z-index-common">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">Contact</h1>
        </div>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    <ContactSection/>
    <FAQContact/>
    </>
  )
}

export default Contact
