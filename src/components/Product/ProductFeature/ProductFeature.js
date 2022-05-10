import React from 'react'
import './ProductFeature.css'

const ProductFeature = ({loading, headphones}) => {
  return (
    <>
      {!loading && 
        headphones.map((headphone) => (
          <div key={headphone.id} className=''>
            <div className='product__heading'>
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