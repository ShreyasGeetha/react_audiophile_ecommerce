import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux';
import CategoryPage from '../CategoryPage';

const ListSpeaker = ({product}) => {
  const {loading, products, error} = useSelector(state => state.product)
  const dispatch = useDispatch()
  
  useEffect(async () => {
    dispatch(fetchProducts(product))
  },[]);

  return (
    
    <div className=''>
      {!loading && 
        <CategoryPage products={products} product={product} />
      }
    </div>
  )
}

export default ListSpeaker