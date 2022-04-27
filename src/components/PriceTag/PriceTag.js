import React from 'react'

const PriceTag = ({ price }) => {
  const internationalNumberFormat = new Intl.NumberFormat('en-US')
  return (
    <div className='h6__manrope'>
      $ {internationalNumberFormat.format(price)}
    </div>
  )
}

export default PriceTag