import Navbar from '../components/Navbar'
import Centertext from '../components/Centertext'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LoadParent from '../Loading/LoadParent';

const Home = () => {
    const homeref = useRef(null);
    const home1 = useRef(null);
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.to(homeref.current,{
            // delay:2,
            // duration:1.2,
            // y:800,
            // opacity:0,
            // ease:"power4.in"
            y:"-100%",
            delay:2,
            duration:0.8,
            ease:"power2.in",
            // rotate:0
            
        })
        tl.from(home1.current,{
          
            duration:1.6,
            scale:1.05,
            ease:"power4.out"
            // duration:0.2,
            // delay:1
        })
    })
  return (
    <div className='h-screen'>
          <div ref={homeref} className=' rotate-0 w-full h-screen z-20 bg-[#0d0d0d] fixed'>
              <LoadParent />

          </div>

      <div ref={home1}  className="overflow-hidden w-full bg-cover bg-center h-screen bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">

          <Navbar />
          <Centertext />

      </div>
    </div>
  )
}

export default Home