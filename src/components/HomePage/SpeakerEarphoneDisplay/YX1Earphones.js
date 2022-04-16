import React from 'react'
import '../../../App.css'
import './YX1Earphones.css'


const YX1Earphones = () => {
  return (
    <div className='YX1Earphones text__font'>
      
      {/* div for the image */}
      <div className='YX1Earphones__img'>
        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/YX1_Earphone/yx1__earphone_showcase_mobile.jpg' alt="yx1 earphone mobile" className='YX1Earphones__img--mobile' />

        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/YX1_Earphone/yx1__earphones_showcase___tablet.jpg' alt="yx1__earphones-tablet" className='YX1Earphones__img--tablet' />
        
        <img src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/YX1_Earphone/yx1__earphones__showcase__desktop.jpg' alt="yx1__earphones-desktop" className='YX1Earphones__img--desktop' />


      </div>

      {/* div for the text */}
      <div className='YX1Earphones__text'>
        <div className='YX1Earphones__text--content flex__center'>
          <span>YX1 EARPHONES</span>
          <button className='button__text '>see product</button>
        </div>

      </div>
      {/* <div className='YX1Earphones__content'>
        
        <div className='YX1Earphones__content--img'>
          <img src={yx1__earphone} alt="yx1__earphone-mobile" className='yx1__earphone--image__mobile' />
          <img src={yx1__earphones__tablet} alt="yx1__earphones-tablet" className='yx1__earphones__tablet--image__tablet' />
          
        </div>

        <div className='YX1Earphones__content--details'>
          <div>
            <span>YX1 EARPHONES</span>
              <button className='button__text '>see product</button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default YX1Earphones