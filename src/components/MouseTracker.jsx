import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react'
const MouseTracker = () => {
    const [location, setLocation] = useState({x : null , y : null});
    const {scrollY} = useScroll();
    const [mul, setMul] = useState(2);
    useMotionValueEvent(scrollY, 'change', (latest)=>{
        setMul(latest.toFixed());
        console.log(latest.toFixed());
    })
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setLocation({x : clientX*mul, y : clientY*mul})
        // console.log(clientX + " " + clientY);
    };
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    },[]);
  return (
    <div className={`z-20 absolute h-10 w-10 bg-white rounded-full`} style={{left : location.x-10 , top : location.y-10}}>

    </div>
  )
}

export default MouseTracker
