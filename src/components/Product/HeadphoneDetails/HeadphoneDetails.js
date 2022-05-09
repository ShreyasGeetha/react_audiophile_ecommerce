import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHeadphone } from '../../../redux';
import RelativeHeader from '../../RelativeHeader/RelativeHeader';
import ProductDetails from '../ProductDetails/ProductDetails';
import ProductFeature from '../ProductFeature/ProductFeature';
import ProductIncludes from '../ProductIncludes/ProductIncludes';


const HeadphoneDetails = () => {  

  const { loading, headphones, error} = useSelector(state => state.headphone)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadphone({ headphoneId }))
    // console.log('what we get is', headphones)
  },[])

  const { headphoneId } = useParams()
  return (
    <div className='text__font'>      
      <RelativeHeader />

      <ProductDetails loading={loading} headphones={headphones} />

      <div>
        {/* product features 
        desktop - this becomes grid, else flex*/}
        {/* console.log({headphones.features}) */}
        <ProductFeature loading={loading} headphones={ headphones }/>
        {/* product in the box 
          mobile - flex 
          tablet - grid*/}
        <ProductIncludes loading={loading} headphones={ headphones }/>
      </div>
      
    </div>
  )
}

export default HeadphoneDetails


