import { useGSAP } from '@gsap/react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import gsap from 'gsap'
import { createContext, useEffect, useRef, useState } from 'react'

const Menu = () => {
  const [menu,setMenu] = useState(createContext);
  // alert(menu.toString())
  const menuref = useRef();
  useEffect(() => {
    if (menu == false) {
      gsap.to(menuref.current, {
        top: 0,
        duration: 1,
        ease: "power4.out",
      });
    } else {
      gsap.to(menuref.current, {
        top: "100%",
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [menu]);
  return (
    <>
        <div ref={menuref} className='fixed  h-screen w-full bg-[linear-gradient(#1A1A1A,#1A1A1A)] top-0 z-0 flex'>
        <button className='fixed top-0 right-0 uppercase text-[0.6vw] p-3 text-white' onClick={()=>setMenu(!menu)}>{menu?"Menu":"Close"}</button>
          <Menuleft />
          <Menuright/>
        </div>
  
    </>
  )
}

export default Menu