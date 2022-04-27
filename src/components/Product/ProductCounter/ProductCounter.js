import React, { useState } from 'react'
import './ProductCounter.css'

const ProductCounter = () => {

  const [count, setCount] = useState(1);

  return (
    <div className='product__count flex__center'>
      <div className='product__count--text' id='minus'>-</div>
      <div className='product__count--text' id='one'>{count}</div>
      <div className='product__count--text' id='plus'>+</div>
    </div>
  )
}

export default ProductCounter