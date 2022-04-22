import React from 'react'
import './CategoryPage.css'
import Button from '../Button'
import Description from '../Description'
import Heading from '../Heading'
import Image from '../Image'

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
                
                {headphone.new &&
                  <div className='text__gold'>
                    New Product
                  </div>}
                
                {/* headphone title/name */}
                <div className=' h4__manrope products__category--name'>
                  <Heading heading={ headphone.name }/>
                </div>
                
                {/* headphone description */}
                <div className='products__category--description__description'>
                  <Description description={ headphone.description}/>
                </div>
                
                {/* Button */}
                <div>
                  <Button color='brown__button' />
                </div>

              </div>

            </div>          
        ))
      }                     
    </div>
  )
}

export default CategoryPage