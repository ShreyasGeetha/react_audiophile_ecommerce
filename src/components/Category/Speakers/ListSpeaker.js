import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpeakers } from '../../../redux';
import CategoryPage from '../CategoryPage';

const ListSpeaker = () => {
  const {loading, speakers, error} = useSelector(state => state.speaker)
  const dispatch = useDispatch()
  
  useEffect(async () => {
    dispatch(fetchSpeakers())
  },[]);

  return (
    
    <div className=''>
      {!loading && 
        <CategoryPage products={speakers} product="speakers" />
      }
    </div>
  )
}

export default ListSpeaker