import React, { useEffect } from 'react'
import './ProductDetails.css';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchHeadphone } from '../../../redux';
import Header from '../../HomePage/Header/Header';
import RelativeHeader from '../../RelativeHeader/RelativeHeader';

const HeadphoneDetails = () => {

  const { loading, headphones, error} = useSelector(state => state.headphone)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeadphone({ headphoneId }))
    console.log('what we get is', headphones)
  },[])

  const { headphoneId } = useParams()
  return (
    <div className='product'>
      <RelativeHeader />
      
      {/* <Header /> */}
      {
        !loading && headphones.map((headphone) => (
          <div>
            
          </div>
        ))
      }
    </div>
  )
}

export default HeadphoneDetails