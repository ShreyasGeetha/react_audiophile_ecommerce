import React, { useEffect } from 'react'
import './ProductDisplay.css'
import '../../../App.css'
import { Link } from 'react-router-dom'
import { fetchHeadphoneCategory } from '../../../redux'
import { useDispatch, useSelector } from 'react-redux'


const ProductDisplay = () => {
  
  const { loading, category, error} = useSelector(state => state.headphoneCategory)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadphoneCategory())
    // console.log('what we get is', category)
  },[])

  return (
    <div className='productDisplay flex__center text__font'>
      
      {
        category.map((category) => (
          <div className='productDisplay__products'>
            <div className='productDisplay__bg--gray'>
            </div>
            <div className='productDisplay__list flex__center'>
              
              <img className='product__list--img__headphone' src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/XX91M1/xx99M1_mobile.png'
                srcSet='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/XX91M1/xx99M1_desktop.png 1000w' alt="xx99M1_headphones_mobileImage" />
                <div className='productDisplay__reflection'>

              </div>
              
              <div className='productDisplay__name body__text'>{category}</div>
              
                <div className='productDisplay__action body__text'>
                  <Link to={`${category}`} >
                    <span>shop</span>
                    <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                  </Link>              
                </div>
              
              </div>
            </div>

        ))
      }
      {/* 
      
      <div className='productDisplay__products'>
          <div className='productDisplay__bg--gray'>
          </div>
          <div className='productDisplay__list flex__center'>
            
            <img className='product__list--img__speaker' src='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/ZX9Speaker/ZX9Speaker_Mobile.png' alt="xx99M1_headphones_mobileImage" />
            <div className='productDisplay__reflection'>

            </div>
            <div className='productDisplay__name body__text'>speakers</div>
            <div className='productDisplay__action body__text'>
              <Link to="speakers" >
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
            <Link to="earphones" >
              <span>shop</span>
              <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </Link>
          </div>
        </div>
       </div>   */}
    </div>
  )
}

export default ProductDisplay