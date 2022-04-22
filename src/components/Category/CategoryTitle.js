import React from 'react'
import './CategoryTitle.css'

const CategoryTitle = ({ title }) => {
  return (
    <div className='categoryTitle text__font'>
      {title}
    </div>
  )
}

export default CategoryTitle