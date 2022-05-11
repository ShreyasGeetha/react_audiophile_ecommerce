import React from 'react'
import ProductDetails from '../ProductDetails/ProductDetails'
import ProductFeature from '../ProductFeature/ProductFeature'
import ProductIncludes from '../ProductIncludes/ProductIncludes'

const ProductDisplay = ({loading, product}) => {
  return (
    <>
      <ProductDetails loading={loading} products={product} />
  
      <div className='productFeatureAndIncludes product__margin'>
        {/* product features 
        desktop - this becomes grid, else flex*/}
        {/* console.log({headphones.features}) */}
        <ProductFeature loading={loading} products={ product }/>
        {/* product in the box 
          mobile - flex 
          tablet - grid*/}
        <ProductIncludes loading={loading} products={ product }/>
      </div>
    </>
  )
}

export default ProductDisplay