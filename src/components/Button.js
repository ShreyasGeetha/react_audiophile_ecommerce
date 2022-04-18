import React from 'react'

// button color will be changed through props submitted
const Button = ({ color }) => {
  return (
    <>
      <button className={`${color}`}>see product</button>
    </>
  )
}

export default Button