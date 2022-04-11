import React from 'react';
import './ZX9Speaker.css';
import '../../../App.css';

import ZX9Speaker_Mobile_HomePage from '../../../assets/ZX9Speaker/mobile/ZX9Speaker_Mobile_HomePage.png'
import zx9__Speaker__desktop from '../../../assets/ZX9Speaker/desktop/zx9__Speaker__desktop.png'


const ZX9Speaker = () => {
  return (
    <div className='ZX9__speaker text__font'>
      
      <div className='ZX9__speaker--content flex__center'>
        
        <div className='ZX9__speaker--img'>
          <img src={ZX9Speaker_Mobile_HomePage}
               srcSet={`${zx9__Speaker__desktop} 1000w`}  alt="ZX9Speaker_Mobile_HomePage" />
        </div>
        <div className='ZX9__speaker__info flex__center'>
          <div className='ZX9__speaker--content__title'>
            ZX9 SPEAKER
          </div>
          <div className='ZX9__speaker--content__description'>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </div>
          <div className='ZX9__speaker--content__button'>
            <button className='button__text black__button'>see product</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ZX9Speaker