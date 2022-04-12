import React from 'react'
import ZX9Speaker from './ZX9Speaker'
import ZX7Speaker from './ZX7Speaker'
import YX1Earphones from './YX1Earphones'

const SpeakerEarphoneDisplay = () => {
  return (
    <div>
      <ZX9Speaker />      
      <ZX7Speaker />
      <YX1Earphones />      
      {/* <ZX9Speaker /> */}
    </div>
  )
}

export default SpeakerEarphoneDisplay