import React from 'react'
import Card from './Card'

const Cards = () => {
    var data = [
        {
            ttext : "Up Next: Culture",
            tbtext : "Who we are",
            start : false,
            button : false,
            btext : true,
            bg : false
        },
        {
            ttext : "Get In Touch",
            tbtext : "Let's get to it, together",
            start : true,
            button : true,
            btext : false,
            bg : true
        }
    ]
  return (
    <div className='max-w-screen-xl mx-auto flex gap-[2px] mt-28 justify-center'>
      {data.map((ele,index)=>(
        <Card key={index} card={ele}/>
      ))}
    </div>
  )
}

export default Cards
