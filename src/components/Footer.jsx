import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-screen-xl flex gap-1 m-auto mt-20 justify-between px-[100px] py-[20px]' >
      <div className='flex flex-col w-[50%] gap-10'>
        <img src="src\assets\refocus_footer.png" className='w-[550px]'/>
        <ul className='flex gap-8 text-xs text-[#848383]'>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Impression</li>
            <li>Term</li>
        </ul>
      </div>
      <div className='flex gap-10'>
        <div className='flex w-[150px] justify-between text-xs tracking-wide'>
            <div className='flex flex-col gap-10'>
                <h1 className='font-extralight text-[#8a8888]'>Socials</h1>
                <ul className='font-extralight text-[#8a8888] gap-2 flex flex-col'>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div className='flex flex-col gap-10'>
            <h1 className='font-extralight text-[#8a8888]'>Sitemap</h1>
                <ul className='flex flex-col gap-2 text-xs'>
                    <li>Home</li>
                    <li>Work</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='h-full flex flex-col items-end justify-center gap-10'>
            <p className='w-56 text-sm font-semibold text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <div className='bg-blue-700 flex w-[120px]  justify-between items-center px-3 py-2'>
                <img src="src\assets\webflow.png" className='h-2'/>
                <p className='text-[9px]'>Enterprise Partner</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
