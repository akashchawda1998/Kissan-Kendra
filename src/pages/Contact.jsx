import React from 'react'
import ContactSection from '../components/ContactSection'
import FAQContact from '../components/FAQContact'
import Breadcrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
    <>
     <Breadcrumb
        title="Contact"
        paths={[{ name: "contact" }]}
      />
    <ContactSection/>
    <FAQContact/>
    </>
  )
}

export default Contact
