import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../redux';
import CategoryCommonComponents from '../../CategoryCommonComponents';
import CategoryPage from '../../CategoryPage';
import './ListHeadphones.css'

const ListHeadphones = ({product}) => {

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
      {!loading && 
        <CategoryCommonComponents />
      }
    </div>
  )
  
}

export default ListHeadphones