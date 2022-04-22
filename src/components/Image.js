import React from 'react'

const Image = ({src, srcset, alt}) => {
  return (
    <>
      <img src={src} alt={alt} 
           srcSet={`${srcset} 1000w`}
      />
    </>
  )
}

export default Image
// srcSet='https://audiophille.s3.ap-southeast-1.amazonaws.com/HomePage/XX91M1/xx99M1_desktop.png 1000w'