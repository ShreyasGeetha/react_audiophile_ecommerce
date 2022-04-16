import React from 'react'
import './CompanyMotto.css'

import bestGear__mobile from '../../../../assets/shared/mobile/bestGear__mobile.jpg'
import bestGear__tablet from '../../../../assets/shared/tablet/bestGear__tablet.jpg'
import bestGear__desktop from '../../../../assets/shared/desktop/bestGear__desktop.jpg'

const CompanyMotto = () => {
  return (
    <div className='motto text__font'>
      {/* for image */}
      <div className='motto__image'>
        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/BestGear/bestGear__mobile.jpg' alt="bestGear__mobile" className='bestGear__mobile' />
        
        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/BestGear/bestGear__tablet.jpg' alt="bestGear__tablet" className='bestGear__tablet' />
        
        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/BestGear/bestGear__desktop.jpg' alt="bestGear__desktop" className='bestGear__desktop'/>
      </div>

      {/* Text of Motto */}
      <div className='motto__text'>
        {/* heading */}
        <div className='motto__text--heading'>
          Bringing you the
          <span> best </span>
          audio gear
        </div>
        {/* description */}
        <div className='motto__text--description'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </div>
      </div>
    </div>
  )
}

export default CompanyMotto