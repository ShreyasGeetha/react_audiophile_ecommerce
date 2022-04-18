import React from 'react';
import Button from '../../../Button';
import './Description.css';

const Description = () => {
  return (
    <div className='hero__banner__description text__font'>
      <div className='overline__manrope hero__title'>
        NEW PRODUCT
      </div>
      <div className='heading__manrope hero__name'>
        XX99 Mark II
HeadphoneS
      </div>
      <div className='body__text hero__description'>
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </div>
      <div className='hero__button'>
        <Button color="brown__button"/>
      </div>
  </div>
  )
}

export default Description