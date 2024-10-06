import React from 'react'
import LoadChild from './LoadChild'

function LoadParent() {
  return (
      <div className='h-2 w-full fixed bg-transparent'>
        <LoadChild/>
    </div>
  )
}

export default LoadParent