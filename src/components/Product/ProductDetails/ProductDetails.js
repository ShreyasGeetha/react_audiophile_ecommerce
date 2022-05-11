import React from 'react'
import './ProductDetails.css';

import Breadcrum from '../Breadcrum';
import Image from '../../Image';
import NewProductText from '../../NewProductText';
import ProductName from '../../ProductName/ProductName';
import ProductDescription from '../../ProductDescription/ProductDesctiption';
import PriceTag from '../../PriceTag/PriceTag';
import Button from '../../Button';
import ProductCounter from '../ProductCounter/ProductCounter';

const ProductDetails = ({loading, products}) => {
  return (
    <div className='product__margin'>
        <Breadcrum />
      
      {/* <Header /> */}
      {
        !loading && products.map((product) => (
          //flex for mobile, grid for tablet and desktop
          <div key={product.id} className='product__details--description'>
            
            {/* image for mobile and desktop*/}            
            <div className='product__details--img'>
              <Image src={product.image.mobile} srcset={ product.image.desktop} alt="" />             
            </div>

            {/* image for tablet */}
            <div className='product__details--img__tablet'>
              <Image src={product.image.tablet} srcset={ product.image.tablet} alt="" />             
            </div>

            {/* product details - new?, name, description, price, add to cart button, product required counter */}
            <div className='product__info'>
              
              {/* is the product new */}
              <NewProductText isNew={product.new} />
              
              {/* name of the product */}
              <ProductName name={product.name} />
              
              {/* description of the product */}
              <ProductDescription description={product.description} textLeft="true" />

              {/* price tag of the product */}
              <PriceTag price={product.price} />

              <div className='product__details--count__cart flex__center'>
                {/* add button to select number of products to be purchased */}
                <ProductCounter />

                {/* add to cart button */}
                <div className='cart__button'>
                  <Button color='brown__button' text='add to cart'/>
                </div>

              </div>
            </div>
            
          </div>
        ))
      }
    </div>
  )
}

export default ProductDetails