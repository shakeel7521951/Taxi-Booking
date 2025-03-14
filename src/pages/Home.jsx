import React from 'react'
import Header from '../components/Home/Header'
import TrustedCabService from '../components/Home/TrustedCabService'
import Services from '../components/Home/Services'
import Plan from '../components/Home/Plan'
import Faqs from '../components/Home/Faqs'

const Home = () => {
  return (
    <div>
        <Header />
        <TrustedCabService />
        <Services />
        <Plan />
        <Faqs />
    </div>
  )
}

export default Home