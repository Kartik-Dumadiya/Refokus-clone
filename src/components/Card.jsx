import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({card}) => {
  return (
    <div className={`w-${card.bg ? "1/2" : '1/3'} h-[350px] rounded-md bg-[#33303a] p-5 flex-col flex justify-between ${card.bg && 'hover:bg-violet-500'} hover:p-6 duration-100 ease-linear`} >
        <div className='flex-col flex gap-4'>
            <div className='flex justify-between items-center'>
                <p className='text-[#fff] text-xs font-light'>{card.ttext}</p>
                <IoIosArrowRoundForward/>
            </div>
            <div className='w-1/3 text-2xl'>{card.tbtext}</div>
        </div>
        {card.start && <div className='w-full flex-col flex'>
                <div className=' w-full text-[80px] font-semibold'>Start a Project</div>
                <button className=' rounded-full border w-[110px] text-sm px-[1px] py-[8px] flex justify-center items-center hover:bg-white hover:text-violet-500 duration-100 ease-linear'>Contact us</button>
            </div>}
        {card.btext && <div className=' text-xs font-extralight text-[#bebebe] leading-4 tracking-wide'>Explore what drives our team.</div>}
    </div>
  )
}

export default Card
