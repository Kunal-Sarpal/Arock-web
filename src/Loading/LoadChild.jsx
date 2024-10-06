import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react'
import gsap from 'gsap'
function LoadChild() {
    const lineref = useRef(null);
    useGSAP(()=>{
        gsap.to(lineref.current,{
            width:"100%",
            duration:1.6,
            delay:1,
            // opacity:0.6,
            ease:"expo.out"
        })
    })
  return (
    <div ref={lineref} className='h-1 bg-white w-[2px] fixed'></div>
  )
}

export default LoadChild