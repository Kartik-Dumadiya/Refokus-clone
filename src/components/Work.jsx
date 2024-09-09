import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Work = () => {
    const [image, setImage] = useState([
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", left : "40%", top : "30%", isActive : false},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", left : "50%", top : "44%", isActive : false},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", left : "38%", top : "56%", isActive : false},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", left : "43%", top : "45%", isActive : false},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", left : "32%", top : "49%", isActive : false},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", left : "53%", top : "65%", isActive : false},
    ])
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if(latest > 25){
            setImage((prev)=>prev.map((ele,index)=> index==0 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==0 ? {...ele, isActive : false} : ele));
        }
        if(latest > 50){
            setImage((prev)=>prev.map((ele,index)=> index==1 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==1 ? {...ele, isActive : false} : ele));
        }
        if(latest > 75){
            setImage((prev)=>prev.map((ele,index)=> index==2 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==2 ? {...ele, isActive : false} : ele));
        }
        if(latest > 100){
            setImage((prev)=>prev.map((ele,index)=> index==3 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==3 ? {...ele, isActive : false} : ele));
        }
        if(latest > 125){
            setImage((prev)=>prev.map((ele,index)=> index==4 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==4 ? {...ele, isActive : false} : ele));
        }
        if(latest > 150){
            setImage((prev)=>prev.map((ele,index)=> index==5 ? {...ele, isActive : true} : ele));
        }else{
            setImage((prev)=>prev.map((ele,index)=> index==5 ? {...ele, isActive : false} : ele));
        }
    })
  return (
    <div className='w-full mt-5 ' >
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw]  leading-none tracking-tight font-medium select-none'>work</h1>
            <div className='absolute left-0 w-full h-full top-0'>
                {image.map((ele,index)=>(ele.isActive && (<motion.img initial={{y : 0}} animate={{y:40}} transition={{ease:'linear', duration:0.6, repeat:Infinity, repeatType: "reverse",}} key={index} src={ele.url} className='absolute w-60 rounded-lg' style={{left:ele.left , top:ele.top}}/>)))}
            </div>
        </div>
    </div>
  )
}

export default Work
