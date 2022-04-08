import React from 'react'
import './ProductDisplay.css'
import '../../../App.css'
import xx99M1_mobile from '../../../assets/xx99M1/mobile/xx99M1_mobile.png'


const ProductDisplay = () => {
  return (
    <div className='productDisplay flex__center'>
      <div className='one'>
        <div className='bg_gray'>
        </div>
        <div className='product_list flex__center'>
          
          <img className='products__img' src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          <div className='refl'>

          </div>
          
          <div className='name body__text'>Headphones</div>
          <div className='action body__text'>
            <span>shop</span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
       <div className='one'>
        <div className='bg_gray'>
        </div>
        <div className='product_list flex__center'>
          
          <img className='products__img' src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          <div className='refl'>

          </div>
          <div className='name body__text'>speakers</div>
          <div className='action body__text'>
            <span>shop</span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
       <div className='one'>
        <div className='bg_gray'>
        </div>
        <div className='product_list flex__center'>
          
          <img className='products__img' src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          <div className='refl'>

          </div>
          <div className='name body__text'>earphones</div>
          <div className='action body__text'>
            <span>shop</span>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </div>
        </div>
      </div>
     
      
        
        {/* <div className='productDisplay__products--speakers'>
          <div>
            <img className='products__img' src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          </div>
          <div>Heaphones</div>
          <div>
            <span>shop</span>
          </div>
          <div className='productDisplay__background'>

          </div>
        </div>
        <div className='productDisplay__products--earphones'>
          <div>
            <img className='products__img' src={xx99M1_mobile} alt="xx99M1_headphones_mobileImage" />
          </div>
          <div>Heaphones</div>
          <div>
            <span>shop</span>
          </div>
          <div className='productDisplay__background'>

          </div>
        </div> */}
      
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