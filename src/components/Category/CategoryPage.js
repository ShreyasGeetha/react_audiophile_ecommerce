import React from 'react'
import './CategoryPage.css'
import Button from '../Button'
import ProductName from '../ProductName/ProductName'
import Image from '../Image'
import { Link } from 'react-router-dom'
import NewProductText from '../NewProductText'
import ProductDescription from '../ProductDescription/ProductDesctiption'

const CategoryPage = ({products, product}) => {  
  return (
    <div className='products text__font'>
      {
          products.filter(category => category.category === product).reverse()
          .map((headphone, index) => (
            <div key={index} className='products__category'>
              
              {/* Images */}
              <div className='products__category--img'>                
                <div className='products__category--img__mobileDesktop'>
                  <Image src={headphone.categoryImage.mobile} srcset={headphone.categoryImage.desktop} alt="" />
                </div>

                <div className='products__category--img__tablet'>
                  <Image src={headphone.categoryImage.tablet} srcset={headphone.categoryImage.tablet} alt="" />
                </div>
              </div>
              
              {/* complete headphone description */}
              <div className='products__category--description flex__center text__font'>
                
                <NewProductText isNew={headphone.new} />
                
                {/* headphone title/name */}
                <ProductName name={headphone.name} />
                
                {/* headphone description */}
                <ProductDescription description={ headphone.description} />
                
                {/* Button */}
                <Link to={`${headphone.id}`}>
                  <div>
                    <Button color='brown__button' />
                  </div>
                </Link>

              </div>

            </div>          
        ))
      }                     
    </div>
  )
}

export default CategoryPage