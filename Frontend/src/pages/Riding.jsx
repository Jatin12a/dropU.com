import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
            <i className='ri-home-5-line text-lg font-semibold'></i>
        </Link>
      <div className='h-1/2'>
      <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

      </div>
      <div className='h-1/2 p-3'>
      
    <div className='flex justify-between items-center'>
    <img className='h-10' src="https://media.tenor.com/iZU11EQZx0YAAAAe/sourvision-woozlereacts.png" alt="" />
    <div className='text-right'>
        <h2 className='text-base font-medium'>jatin</h2>
        <h4 className='text-xl font-semi'>up80-6969</h4>
        <p className='text-sm text-gray-600'>tuktuk</p>
    </div>
    </div>

    <div className='flex gap-3 mt-4 flex-col justify-between items-center ' >
        <div className='w-full' >
            
            <div className='flex  items-center gap-5  p-3 border-b-2 '>
                <i className='ri-map-pin-2-fill'></i>
                <div >
                    <h3 className='text-base font-medium'>202/NN</h3>
                    <p className='text-base -mt-1 text-gray-600' >Sikandra agra</p>
                </div>
            </div>
            <div className='flex  items-center gap-5 p-3  '>
                <i className='ri-currency-line'></i>
                <div >
                    <h3 className='text-base font-medium'>$10.2</h3>
                    <p className='text-base -mt-1 text-gray-600' >Cash Cash</p>
                </div>
            </div>
        </div  >
    </div>

      <button className='w-full mt-2 bg-green-500 text-white font-semibold p-2 rounded-lg   '>PayUs Mora</button>
      </div>
    </div>
  )
}

export default Riding
