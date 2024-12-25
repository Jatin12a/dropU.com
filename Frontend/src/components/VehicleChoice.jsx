import React from 'react'

const vehicleChoice = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
          props.setVehicleChoice(false)
        }} className='px-2 text-center absolute top-0 left-[45%] ' ><i className='ri-arrow-down-wide-line'></i></h5>
        <h2 className='text-2xl font-bold mb-3'>Select Your Ride</h2>
          <div  onClick={()=>{
            props.setSelectedVehicle(true)
          }} className='flex bg-gray-200 active:border-black  w-full border-2 rounded-xl p-3  items-center justify-between mb-4'>
            <img className='h-16' src="https://media.tenor.com/iZU11EQZx0YAAAAe/sourvision-woozlereacts.png" alt="" />
            <div className=' w-1/2'>
              <h4 className='font-medium text-base'>DropGO <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5  className='font-medium text-sm'>2 mins away </h5>
              <p  className='font-normal text-xs text-gray-600'> Affordable,compact rides</p>
            </div>
            <h2 className='text-2xl font-semibold'>$10.3</h2>
          </div>
          <div onClick={()=>{
            props.setSelectedVehicle(true)
          }} className="flex  bg-gray-200 active:border-black w-full border-2 rounded-xl p-3 items-center justify-between mb-4">
    <img className="h-16" src="https://media.tenor.com/9-yAh2OGYfsAAAAe/car-driving.gif" alt="Car" />
    <div className="w-1/2">
      <h4 className="font-medium text-base">
        GoElite <span><i className="ri-user-3-fill"></i> 3</span>
      </h4>
      <h5 className="font-medium text-sm">5 mins away</h5>
      <p className="font-normal text-xs text-gray-600">Luxury, high-end rides</p>
    </div>
    <h2 className="text-2xl font-semibold">$15.6</h2>
          </div>
          <div onClick={()=>{
            props.setSelectedVehicle(true)
          }} className="flex bg-gray-200 active:border-black  w-full border-2 rounded-xl p-3 items-center justify-between mb-4">
    <img className="h-16" src="https://media.tenor.com/9xu2R85YvpoAAAAe/taxi.gif" alt="Car" />
    <div className="w-1/2">
      <h4 className="font-medium text-base">
        QuickCab <span><i className="ri-user-3-fill"></i> 6</span>
      </h4>
      <h5 className="font-medium text-sm">3 mins away</h5>
      <p className="font-normal text-xs text-gray-600">Family-friendly rides</p>
    </div>
    <h2 className="text-2xl font-semibold">$12.5</h2>
          </div>
          
    </div>
  )
}

export default vehicleChoice
