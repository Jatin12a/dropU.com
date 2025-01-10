import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = () => {
  return (
    <div>
      <h5 onClick={() => {
        props.setConfirmRidePopupPanel(false)
      }} className='text-center w-full -mt-3 ' ><i className='ri-arrow-down-wide-line'></i></h5>
      <h2 className='text-2xl text-center font-bold mb-2'>Finish Ride</h2>
      <div className='flex items-center justify-between w-full p-5 bg-gray-200 rounded-lg'>
        <div className='flex items-center gap-3'>
          <img className='h-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV8_LKnZGfwbUrZnzsOtWnmqi9aFV5JbeAA&s" alt="" />
          <h2 className='text-xl font-medium'>Jatin Gupta</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2KM</h5>
      </div>
      <div className='flex gap-3 mt-4 flex-col justify-between items-center ' >
        <div className='w-full' >
          <div className='flex  items-center gap-3 p-3  border-b-2'>
            <i className='ri-map-pin-user-fill'></i>
            <div >
              <h3 className='text-base font-medium'>202/NN</h3>
              <p className='text-base -mt-1 text-gray-600' >Sikandra agra</p>
            </div>
          </div>
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
        <form >

        </form>
        <div className='w-full flex justify-between flex-col'>
         
            

            <Link
              to='/driver-home'
              className='w-full mt-2 bg-green-500 text-white font-semibold p-2 rounded-lg text-center'
            >
              Complete Ride
            </Link>
        </div>

      </div>

    </div>
  )
}

export default FinishRide
