import React from 'react'
import CategoryCommonComponents from '../CategoryCommonComponents'
import CategoryHeader from '../CategoryHeader'
import ListSpeaker from './ListSpeaker'

const Speakers = () => {
  return (
    <div className='headphones'>
      <CategoryHeader category="speakers"/>
      <ListSpeaker product="speakers"/>
      <CategoryCommonComponents />
    </div>
  )
}

export default Speakers