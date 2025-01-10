import React from 'react'

const DriverDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img className='h-16 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZV8_LKnZGfwbUrZnzsOtWnmqi9aFV5JbeAA&s" alt="" />
          <h4 className='tex-lg font-semibold'>Jaitn Gupta</h4>
        </div>
        <div className='text-xl font-semibold'>
          <h5 className='text-xl font-medium'>$234.5</h5>
        <p className='text-sm font-thin'>Earned</p>

        </div>
      </div>
      <div className='flex bg-gray-200 p-3 mt-6 rounded-2xl  justify-center gap-5 items-start'>
        <div className='text-center'>
          <i className='ri-timer-2-line text-2xl font-light'></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>hours Online</p>
        </div>
        <div  className='text-center'>
          <i className='ri-speed-up-line '></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>hours Online</p>
         
        </div>
        <div  className='text-center'>
          <i className='ri-booklet-line '></i>
          <h5 className='text-lg font-medium'>10.2</h5>
          <p className='text-sm text-gray-600'>hours Online</p>
          
        </div>
      </div>
    </div>
  )
}

export default DriverDetails
