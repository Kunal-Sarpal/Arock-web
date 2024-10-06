import React from 'react'
import Herotext from './Herotext'
import Subheading from './Subheading'

function Centertext() {
  return (
    <div className='text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center leading-tight'>
        <Herotext/>
        <Subheading/>
    </div>
  )
}

export default Centertext