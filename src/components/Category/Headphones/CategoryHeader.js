import React from 'react'
import './CategoryHeader.css'
import Header from '../../HomePage/Header/Header'
import CategoryTitle from './CategoryTitle'

const CategoryHeader = () => {
  return (
    <div className='CategoryHeader__background'>      
      <Header />    
      <CategoryTitle title="headphones"/>      
    </div>
  )
}

export default CategoryHeader