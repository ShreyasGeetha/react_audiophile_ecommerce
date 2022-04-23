import React from 'react'
import './Headphones.css'
import CategoryHeader from '../CategoryHeader'
import ListHeadphones from './ListHeadphones/ListHeadphones'
import CategoryCommonComponents from '../CategoryCommonComponents'

const Headphones = () => {
  return (
    <div className='headphones'>
      <CategoryHeader category='headphones'/>
      <ListHeadphones />      
    </div>
  )
}

export default Headphones