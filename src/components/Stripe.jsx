import React from 'react'

const Stripe = ({strip}) => {
  return (
    <div className='w-[16.6666%] h-14 flex justify-between items-center border-[1px] border-[#515151] px-5 flex-shrink-0'>
      <img src={strip.url} className='h-5'/>
      <span className='text-lg font-semibold'>{strip.num}</span>
    </div>
  )
}

export default Stripe
