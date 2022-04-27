import React, { useEffect, useState } from 'react'

// button color will be changed through props submitted
const Button = ({ color, text }) => {

  const [btnText, setBtnText] = useState('see product')

  useEffect(() => {
    setBtnText(text ? text : btnText)
  },[])

  return (
    <>
      <button className={`${color}`}>{btnText}</button>
    </>
  )
}

export default Button