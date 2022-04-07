import React from 'react'
import './Hero.css'
import '../../../App.css'
import mobileHero from '../../../assets/home/mobile/mobileHero.jpg'
import tabletHero from '../../../assets/home/tablet/tabletHero.jpg'
import desktopHero from '../../../assets/home/desktop/desktopHero.jpg'
import Header from '../Header/Header'
import Description from './Description/Description'

const Hero = () => {
  return (
    <div className='hero'>              
      <div className='hero__banner'>  
        <img src={mobileHero} alt="" className='hero__mobile__img' />
        <img src={tabletHero} alt="" className='hero__tablet__img' />
        <img src={desktopHero} alt="" className='hero__desktop__img' />
        <Header /> 
        <Description />
      
      </div>
     </div>
  )
}

export default Hero