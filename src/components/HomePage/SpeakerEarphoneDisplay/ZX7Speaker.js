import React from 'react';
import './ZX7Speaker.css';
import zx7_speaker from '../../../assets/home/mobile/zx7_speaker.jpg';
import zx7__tablet from '../../../assets/home/tablet/zx7__tablet.jpg'
import zx7__desktop from '../../../assets/home/desktop/zx7__desktop.jpg'

const ZX7Speaker = () => {
  return (
    <div>

    <div className='ZX7_Speaker text__font'>
      <div className='ZX7_Speaker--image'>
        <img src={zx7_speaker} alt="zx7_speaker-desktop" className='ZX7_Speaker--image__mobile' />
        <img src={zx7__tablet} className='ZX7_Speaker--image__tablet'alt="ZX7_Speaker--image__tablet" />
        <img src={zx7__desktop} className='ZX7_Speaker--image__desktop'alt="ZX7_Speaker--image__desktop" />
      </div>
      
     
        <div className='zx7__info--title'>
            ZX7 SPEAKER
        </div>
        <div className='ZX7__speaker--content__button'>
            <button className='button__text'>see product</button>
        </div>      
    </div>
    </div>
  )
}

export default ZX7Speaker