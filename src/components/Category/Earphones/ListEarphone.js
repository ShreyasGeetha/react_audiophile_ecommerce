import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEarphones } from '../../../redux';
import CategoryPage from '../CategoryPage';

const ListEarphone = () => {
  const {loading, earphones, error} = useSelector(state => state.earphone)
  const dispatch = useDispatch()
  
  useEffect(async () => {
    dispatch(fetchEarphones())
  },[]);

  return (
    
    <div className=''>
      {!loading && 
        <CategoryPage products={earphones} product="earphones" />
      }
    </div>
  )
}

export default ListEarphone