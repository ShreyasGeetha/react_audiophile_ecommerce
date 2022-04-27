import React from 'react'

const NewProductText = ({isNew}) => {
  return (
    <>
      {isNew &&
        <div className='text__gold'>
          New Product
        </div>}
    </>
  )
}

export default NewProductText