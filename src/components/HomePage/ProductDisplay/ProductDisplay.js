import React from 'react'
import './ProductDisplay.css'
import '../../../App.css'
import xx99M1_mobile from '../../../assets/xx99M1/mobile/xx99M1_mobile.png'
import xx99M1_desktop from '../../../assets/xx99M1/desktop/xx99M1_desktop.png'
import ZX9Speaker_Mobile from '../../../assets/ZX9Speaker/mobile/ZX9Speaker_Mobile.png'
import YX1_earphone_mobile from '../../../assets/YX1_earphone/mobile/YX1_earphone_mobile.png'
import { Link } from 'react-router-dom'


const ProductDisplay = () => {
  return (
    <div className='productDisplay flex__center text__font'>
      
      <div className='productDisplay__products'>
        <div className='productDisplay__bg--gray'>
        </div>
        <div className='productDisplay__list flex__center'>
          
          <img className='product__list--img__headphone' src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/XX91M1/xx99M1_mobile.png'
            srcSet='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/XX91M1/xx99M1_desktop.png 1000w' alt="xx99M1_headphones_mobileImage" />
            <div className='productDisplay__reflection'>

          </div>
          
          <div className='productDisplay__name body__text'>Headphones</div>
          
            <div className='productDisplay__action body__text'>
              <Link to="headphones" >
                <span>shop</span>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
              </Link>              
            </div>
          
        </div>
      </div>

      <div className='productDisplay__products'>
          <div className='productDisplay__bg--gray'>
          </div>
          <div className='productDisplay__list flex__center'>
            
            <img className='product__list--img__speaker' src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/ZX9Speaker/ZX9Speaker_Mobile.png' alt="xx99M1_headphones_mobileImage" />
            <div className='productDisplay__reflection'>

            </div>
            <div className='productDisplay__name body__text'>speakers</div>
            <div className='productDisplay__action body__text'>
              <Link to="headphones" >
                <span>shop</span>
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
              </Link>
            </div>
          </div>
        </div>


       <div className='productDisplay__products'>
        <div className='productDisplay__bg--gray'>
        </div>
        <div className='productDisplay__list flex__center'>
          
          <img className='product__list--img__earphone' src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/YX1_Earphone/YX1_earphone_mobile.png' alt="xx99M1_headphones_mobileImage" />
          <div className='productDisplay__reflection'>

          </div>
          <div className='productDisplay__name body__text'>earphones</div>
          <div className='productDisplay__action body__text'>
            <Link to="headphones" >
              <span>shop</span>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </Link>
          </div>
        </div>
       </div>  
    </div>
  )
}

export default ProductDisplay

{/* <div className="productDisplay__products-heaphones flex__center">
          <div>
            <img src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          </div>
          <div>Heaphones</div>
          <div>
            <span>shop</span>
          </div>
          <div className='productDisplay__background'>

          </div>
        </div>
        <div className="productDisplay__products-speakers flex__center">
          <div>
            <img src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          </div>
          <div>speakers</div>
          <div>
            <span>shop</span>
          </div>
        </div>
        <div className="productDisplay__products-earphones flex__center">
          <div>
            <img src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          </div>
          <div>earphones</div>
          <div>
            <span>shop</span>
          </div>
        </div> */}