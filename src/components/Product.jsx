import React from 'react'
import Button from './Button'

const Product = ({data, mover, ind}) => {
  return (
    <div className={`w-full hover:bg-[#1430D4] h-[23rem] flex items-center}`} onMouseEnter={()=>mover(ind)}>
        <div className='flex max-w-screen-xl mx-auto justify-between h-[250px] py-10 px-32 '>
        <h1 className='text-[40px] font-semibold h-full justify-center items-center flex'>{data.title}</h1>
        <div className='w-1/3 flex flex-col gap-3'>
            <p>{data.description}</p>
            <div className='flex gap-2'>
                {data.live && <Button text="Live Website" width="38"/>}
                {data.case && <Button text="Case Study" width="38"/>}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Product
