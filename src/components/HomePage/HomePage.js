import React from 'react'
import Hero from './Hero/Hero'
import './HomePage.css'
import ProductDisplay from './ProductDisplay/ProductDisplay'

const HomePage = () => {
  return (
    <div className='homepage'>
      
      <Hero />
      <ProductDisplay />
    </div>
  )
}

export default HomePage