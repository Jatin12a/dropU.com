import React from 'react'
import logo from '../assets/Logo.png'
export default function Home() {
  return (
    <div className='h-screen relative' > 
      <img className='w-20 absolute left-5 top-5' src={logo} alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />
      </div>
      <div className=' absolute top-0 w-full h-full flex flex-col justify-end '>
        <div className='h-[30%] p-5 bg-white'>
        <h4 className='text-3xl font-semibold ' >Find a trip </h4>
        <form action="">
          <input className='bg-[#eeeeee] px-12 py-2 test-xl rounded-lg w-full mb-4 mt-3 ' type="text" placeholder='add a pickup location' />
          <input className='bg-[#eeeeee] px-12 py-2 test-xl rounded-lg w-full ' type="text" placeholder='add a drop off location' />
        </form>
        </div>
        <div className='h-[70%] bg-red-500 hidden'>

        </div>
      </div>
    </div>
  )
}
