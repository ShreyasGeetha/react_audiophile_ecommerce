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

const ProductDetails = ({loading, headphones}) => {
  return (
    <div className='product__margin'>
        <Breadcrum />
      
      {/* <Header /> */}
      {
        !loading && headphones.map((headphone) => (
          //flex for mobile, grid for tablet and desktop
          <div className='product__details--description'>
            
            {/* image for mobile and desktop*/}            
            <div className='product__details--img'>
              <Image src={headphone.image.mobile} srcset={ headphone.image.desktop} alt="" />             
            </div>

            {/* image for tablet */}
            <div className='product__details--img__tablet'>
              <Image src={headphone.image.tablet} srcset={ headphone.image.tablet} alt="" />             
            </div>

            {/* product details - new?, name, description, price, add to cart button, product required counter */}
            <div className='product__info'>
              
              {/* is the product new */}
              <NewProductText isNew={headphone.new} />
              
              {/* name of the product */}
              <ProductName name={headphone.name} />
              
              {/* description of the product */}
              <ProductDescription description={headphone.description} textLeft="true" />

              {/* price tag of the product */}
              <PriceTag price={headphone.price} />

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