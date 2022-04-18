import React from 'react';
import Button from '../../Button';
import './ZX7Speaker.css';

const ZX7Speaker = () => {
  return (
    <div>

    <div className='ZX7_Speaker text__font'>
      <div className='ZX7_Speaker--image'>
          <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/ZX7Speaker/zx7_speaker_mobile.jpg' alt="zx7_speaker-desktop" className='ZX7_Speaker--image__mobile' />
          
          <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/ZX7Speaker/zx7__tablet.jpg' className='ZX7_Speaker--image__tablet' alt="ZX7_Speaker--image__tablet" />
          
          <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/ZX7Speaker/zx7__desktop.jpg' className='ZX7_Speaker--image__desktop' alt="ZX7_Speaker--image__desktop" />
          
      </div>
      
     
        <div className='zx7__info--title'>
            ZX7 SPEAKER
        </div>
        <div className='ZX7__speaker--content__button'>
            <Button color="brown__button"/>
        </div>      
    </div>
    </div>
  )
}

export default ZX7Speaker