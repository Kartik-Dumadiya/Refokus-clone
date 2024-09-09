import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({images, direction}) => {
  return (
    <div className='flex'>
      <motion.div initial={{x: direction == '-100%' ? "0" : '-100%'}} animate={{x:direction == '-100%' ? "-100%" : '0'}} transition={{ease: 'linear', repeat:Infinity , duration : 20}} className='flex overflow-hidden gap-20  h-12 flex-shrink-0'>
        {images.map((ele,index)=><img src={ele} key={index} className='w-[6vw] flex-shrink-0'/>)}
      </motion.div>
      <motion.div initial={{x: direction == '-100%' ? "0" : '-100%'}} animate={{x:direction == '-100%' ? "-100%" : '0'}} transition={{ease: 'linear', repeat:Infinity , duration : 20}}  className='flex overflow-hidden gap-20  h-12 flex-shrink-0'>
        {images.map((ele,index)=><img src={ele} key={index} className='w-[6vw] flex-shrink-0'/>)}
      </motion.div>
    </div>
  )
}

export default Marquee
