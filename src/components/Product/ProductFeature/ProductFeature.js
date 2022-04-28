import React from 'react'
import './ProductFeature.css'

const ProductFeature = ({loading, headphones}) => {
  return (
    <>
      {!loading && 
        headphones.map((headphone) => (
          <div className='product__margin'>
            <div className='product__feature'>
              features
            </div>

            {/* headphone features */}
            <div className='product__feature--text body__text'>            
              {headphone.features}
            </div>
          </div>
      ))
      }
      
    </>
  )
}

export default ProductFeature