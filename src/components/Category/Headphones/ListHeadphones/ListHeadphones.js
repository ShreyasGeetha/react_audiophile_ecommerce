import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeadphones } from '../../../../redux';
import CategoryCommonComponents from '../../CategoryCommonComponents';
import CategoryPage from '../../CategoryPage';
import './ListHeadphones.css'

const ListHeadphones = () => {

  const {loading, headphones, error} = useSelector(state => state.headphone)
  const dispatch = useDispatch()
  
  useEffect(async () => {
    dispatch(fetchHeadphones())
  },[]);

  return (
    
    <div className=''>
      {!loading && 
        <CategoryPage products={headphones} product="headphones" />        
      }
      {!loading && 
        <CategoryCommonComponents />
      }
    </div>
  )
}

export default ListHeadphones