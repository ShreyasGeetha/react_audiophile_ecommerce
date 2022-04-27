import React, { useEffect, useState } from 'react'
import './ProductDesctiption.css'

const ProductDescription = ({ description, textLeft }) => {
  
  const [isTextLeft, setTextLeft] = useState(false)

  useEffect(() => {
    setTextLeft(textLeft ? 'product__description--left' : 'product__description')
  },[])

  return (//'body__text product__description'
    <div className={`body__text ${isTextLeft}`}>
      {description}
    </div>
  )
}

export default ProductDescription