import React from 'react'
import Header from '../HomePage/Header/Header'
import Line from '../Line/Line'

const RelativeHeader = () => {
  return (
    <>
      <div className='CategoryHeader_menu'>
        <Header relativeMenu="true"/>    
      </div>  
      <Line />
    </>
  )
}

export default RelativeHeader