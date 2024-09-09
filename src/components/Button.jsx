import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = (props) => {
  return (
    <div className= {`w-${props.width} h-8 bg-zinc-100 rounded-full px-4 py-2 text-black flex justify-between items-center`}>
        <span className='inline-block text-sm'>{props.text}</span>
        <IoIosReturnRight className='inline-block ml-2' />
    </div>
  )
}

export default Button
