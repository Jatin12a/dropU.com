import React from 'react'

export default function LookingDriver(props) {
    return (
        <div>
            <h5 onClick={() => {
                props.setVehicleFound(false)
            }} className='text-center w-full -mt-3 ' ><i className='ri-arrow-down-wide-line'></i></h5>
            <h2 className='text-2xl text-center font-bold mb-2'>Looking for Ride</h2>
            <div className='flex gap-3 mt-4 flex-col justify-between items-center ' >
                <img className='h-20' src="https://media.tenor.com/iZU11EQZx0YAAAAe/sourvision-woozlereacts.png" alt="" />
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
