import React from 'react'
import './Headphones.css'
import CategoryHeader from './CategoryHeader'
import CategoryTitle from './CategoryTitle'
import ListHeadphones from './ListHeadphones/ListHeadphones'

const Headphones = () => {
  return (
    <div className='headphones'>
      <CategoryHeader />
      <ListHeadphones />
    </div>
  )
}

export default Headphones