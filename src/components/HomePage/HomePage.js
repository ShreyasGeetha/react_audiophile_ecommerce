import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import './HomePage.css'
import CompanyMotto from './ProductDisplay/CompanyMotto/CompanyMotto'
import SpeakerEarphoneDisplay from './SpeakerEarphoneDisplay/SpeakerEarphoneDisplay'
import Footer from './Footer/Footer'
import ProductsDisplay from './ProductDisplay/ProductsDisplay'


const HomePage = () => {


  return (
    <div className='homepage'>
      
      <Hero />
      <ProductsDisplay />
      <SpeakerEarphoneDisplay />
      <CompanyMotto />
      <Footer />
    </div>
  )
}

export default HomePage