import React from 'react'
import './CategoryHeader.css'
import CategoryTitle from './CategoryTitle'
import RelativeHeader from '../RelativeHeader/RelativeHeader'

const CategoryHeader = ({category}) => {
  return (
    <div className='CategoryHeader__background'>  
      <RelativeHeader />
      <CategoryTitle title={category}/>      
    </div>
  )
}

export default CategoryHeader