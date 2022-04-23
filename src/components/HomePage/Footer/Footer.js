import React from 'react'
import '../../../App.css'
import './Footer.css'
import Logo from '../../Logo/Logo'
import Instagram from '../../Logo/Instagram'
import Twitter from '../../Logo/Twitter'
import Facebook from '../../Logo/Facebook'

const Footer = () => {
  return (
    <div className='footer text__font'>
      <div className='brownHighlighter'></div>
      
      <div className='logo__logoAndMenu flex__center'>
        <Logo color="bg_black"/>
        <div className='footer__menu flex__center'>
          <div>home</div>
          <div className='footer__menu--headphones'>headphones</div>
          <div className='footer__menu--speakers'>speakers</div>
          <div>earphones</div>
        </div>
      </div>

      {/* footer description */}
      <div className='footer__description'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
      </div>

      {/* copyright and social networking logo */}
      <div className='footer__bottomSection flex__center'>
        <div className='footer__copyright'>
          Copyright 2021. All Rights Reserved
        </div>

        <div className='footer__socialNetwork flex__center'>
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>

    </div>
  )
}

export default Footer