import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

function Herotext() {
    const textref = useRef(null);

    // useEffect(() => {
      
        // }
    // }, []); 
    useGSAP(()=>{
        let clutter = '';
        const arr = 'Arock'.split('');
        arr.forEach((element) => {
            clutter += `<span className="inline-block">${element}</span>`;
        });

        // if (textref.current) {
        textref.current.innerHTML = clutter;
        gsap.from("div span",{
            y:200,
            stagger:0.1,
            duration:0.4,
            delay:2.4,
            opacity:0,
            ease: "expo.out"
        })
    })

    return (
        <div ref={textref} className="overflow-hidden text-[21vw] uppercase font-extrabold flex w-full justify-center items-center">
        </div>
    );
}

export default Herotext;
