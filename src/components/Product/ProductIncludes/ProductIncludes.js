import React from 'react'
import './ProductIncludes.css'

const ProductIncludes = ({loading, products}) => {
  return (
    <div className='productIncludes flex__center'>
      <div className='product__heading'>
        in the box
      </div>
      
      {/* all aligned left */}      
      <div className='productIncludes__items '>        
        {
          products.map((headphone) => (
            headphone.includes.map((include) => (
            <div className='productIncludes__items--item flex__center '>
              <div className='productIncludes__items--item__quantity'>                  
                {include.quantity}x
              </div>
              <div className='productIncludes__items--item__item body__text'>
                {include.item}
              </div>
            </div>
            
            ))
          ))
        }
      </div>
    </div>
  )
}

export default ProductIncludes