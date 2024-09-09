import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {
    var data = [
        {
            title : "Rainfall",
            description : "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease..",
            live : true,
            case : true
        },
        {
            title : "Arqitel",
            description : "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live : true,
            case : false
        },
        {
            title : "TTR",
            description : "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live : true,
            case : false
        },
        {
            title : "YIR 2022",
            description : "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live : true,
            case : true
        },
        {
            title : "Yahoo!",
            description : "Arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
            live : true,
            case : true
        },
    ]
    const [pos, setPos] = useState(23);
    const mover = (val) => {
        setPos(val*23)
    }
  return (
    <div className='flex flex-col mt-32 w-full relative' >
        {data.map((ele,index)=>(
            <Product key={index} data={ele} mover={mover} ind={index}/>
        ))}
        <motion.div className='absolute w-full h-full top-0 pointer-events-none '>
            <motion.div 
                initial={{y: pos}} animate={{y : pos+`rem`}} 
                className='h-[23rem] bg-white w-[30%] absolute left-[29%] rounded-md overflow-hidden'
                transition={{ease : [0.76, 0, 0.24, 1], duration : 0.6}}
                >
                <motion.div animate={{y : -pos+`rem`}}  transition={{ease : [0.76, 0, 0.24, 1], duration : 0.5}} className='h-fullw-full'>
                    <video src="src\assets\rainfall-43.webm" loop muted autoPlay className='h-[23rem] w-full object-cover'></video>
                </motion.div>
                <motion.div animate={{y : -pos+`rem`}}  transition={{ease : [0.76, 0, 0.24, 1], duration : 0.5}} className='h-full w-full'>
                    <video src="src\assets\rocketchat-43.webm" loop muted autoPlay className='h-full w-full object-cover'></video>
                </motion.div>
                <motion.div animate={{y : -pos+`rem`}}  transition={{ease : [0.76, 0, 0.24, 1], duration : 0.5}} className='h-full w-full'>
                    <video src="src\assets\silvr-43.webm" loop muted autoPlay className='h-full w-full object-cover'></video>
                </motion.div>
                <motion.div  animate={{y : -pos+`rem`}} transition={{ease : [0.76, 0, 0.24, 1], duration : 0.5}} className='h-full w-full'>
                    <video src="src\assets\bcgp-43.webm" loop muted autoPlay className='h-full w-full object-cover'></video>
                </motion.div>
                <motion.div  animate={{y : -pos+`rem`}} transition={{ease : [0.76, 0, 0.24, 1], duration : 0.5}} className='h-full w-full'>
                    <video src="src\assets\yahoo-43.webm" loop muted autoPlay className='h-full w-full object-cover'></video>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Products
