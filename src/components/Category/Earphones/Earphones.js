import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryCommonComponents from '../CategoryCommonComponents'
import CategoryHeader from '../CategoryHeader'
import ListSpeaker from '../Speakers/ListSpeaker'
import ListEarphone from './ListEarphone'

const Earphones = () => {
  return (
      <div className='headphones'>
      <CategoryHeader category='earphones'/>
      <ListEarphone product='earphones'/>
      <CategoryCommonComponents />
      </div>
    )
}

export default Earphones