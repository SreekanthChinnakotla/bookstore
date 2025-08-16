import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Feed = () => {
  return (
    <div className='ml-2 h-full  bg-white mr-1 w-auto'> 
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Feed