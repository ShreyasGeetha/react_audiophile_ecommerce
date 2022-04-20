import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '../../../Button'
import './ListHeadphones.css'
const ListHeadphones = () => {
  var [data, setData]  = useState()
  useEffect(async () => {
   data = await  axios.get('./data.json')
      // .then((response) => {
      //   data = response.data
      // console.log(response.data)
      // })
      // .then((error) => {
      //   console.log('error '+error)
      // })
    data = data.data.filter((cat) => {
      return cat.category === 'headphones'
    })
    setData(data)
    // console.log(data)
  },[]);

  return (
    <div className='listHeadPhones'>
      
      
      {console.log('hello') }
      
      {/* flex for mobile and tablet, grid for desktop */}
      <div>
        {/* headphones Image */}
        <div>
          <img src="" alt="" />
        </div>
        {/* Headphones description */}
        <div>
          
          {/* headphone title/name */}
          <div>
            XX99 Mark II Headphones
          </div>
          {/* headphone description */}
          <div>
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
          </div>
          {/* brown button */}
          <div>
            <Button color='brown__button'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListHeadphones