import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import './HomePage.css'
import CompanyMotto from './ProductDisplay/CompanyMotto/CompanyMotto'
import ProductDisplay from './ProductDisplay/ProductDisplay'
import SpeakerEarphoneDisplay from './SpeakerEarphoneDisplay/SpeakerEarphoneDisplay'
import Footer from './Footer/Footer'


const HomePage = () => {


  return (
    <div className='homepage'>
      
      <Hero />
      <ProductDisplay />
      <SpeakerEarphoneDisplay />
      <CompanyMotto />
      <Footer />
    </div>
  )
}

export default HomePage