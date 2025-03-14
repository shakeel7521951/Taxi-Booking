import React from 'react'
import Header from '../components/Contact/Header';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';

const Contact = () => {
  return (
    <div>
        <Header name="Contact Us" title="Contact"/>
        <ContactForm />
        <Map/>
    </div>
  )
}

export default Contact;