import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../../redux';
import RelativeHeader from '../../RelativeHeader/RelativeHeader';
import ProductDisplay from '../ProductDisplay/ProductDisplay';


const HeadphoneDetails = () => {  

  const { loading, products, error} = useSelector(state => state.product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ productId }))
    // console.log('what we get is', productId)
  },[])

  const { productId } = useParams()
  return (
    <>      
      {
        !loading &&
        
          <div className='text__font'>      
            <RelativeHeader />
  
            <ProductDisplay loading={loading} product={ products }/>
            
          </div>
      }
    </>
    
  )
}

export default HeadphoneDetails


