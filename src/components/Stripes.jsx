import React from 'react'
import Stripe from './Stripe'
import { motion } from 'framer-motion'
const Stripes = () => {
    let data =  [
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg" , num : 48},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg" , num : 2},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg" , num : 11},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg" , num : 48},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg" , num : 2},
        {url : "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b7042241_65b2ca2282d921d99755eaf6_Logo%2520White%25201.svg" , num : 11},
    ]
  return (
    <div className='flex w-full overflow-hidden mt-20' 
    >
      <motion.div initial={{x : 0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:20, repeat:Infinity}} className='flex mt-24 overflow-hidden flex-shrink-0 w-full'>
          {data.map((ele,index)=>{
              return <Stripe strip={ele} key={index}/>
          })}
      </motion.div>
      <motion.div initial={{x : 0}} animate={{x:'-100%'}} transition={{ease:'linear', duration:20, repeat:Infinity}} className='flex mt-24 overflow-hidden flex-shrink-0 w-full'>
          {data.map((ele,index)=>{
              return <Stripe strip={ele} key={index}/>
          })}
      </motion.div>
    </div>
  )
}

export default Stripes
