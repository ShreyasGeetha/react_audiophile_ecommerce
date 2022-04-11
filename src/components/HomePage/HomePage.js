import React from 'react'
import Hero from './Hero/Hero'
import './HomePage.css'
import ProductDisplay from './ProductDisplay/ProductDisplay'
import SpeakerEarphoneDisplay from './SpeakerEarphoneDisplay/SpeakerEarphoneDisplay'

const HomePage = () => {
  return (
    <div className='homepage'>
      
      <Hero />
      <ProductDisplay />
      <SpeakerEarphoneDisplay />

    </div>
  )
}

export default HomePage