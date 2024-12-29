import React from 'react'

export default function WaitingDriver(props) {
  return (
    <div>
    <h5 onClick={() => {
        props.setWaitingFound(false)
    }} className='text-center w-full -mt-3 ' ><i className='ri-arrow-down-wide-line'></i></h5>
    <h2 className='text-2xl text-center font-bold mb-2'>Waiting for Ride</h2>

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
    </div>

</div>
  )
}
