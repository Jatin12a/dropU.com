import React from 'react'

const Popup = (props) => {
  return (
    <div>
    <h5 onClick={()=>{
             props.setRidePopupPanel(false)
           }} className='text-center w-full -mt-3 ' ><i className='ri-arrow-down-wide-line'></i></h5>
           <h2 className='text-2xl text-center font-bold mb-2'>Customers</h2> 
             <div className='flex items-center justify-between w-full bg-gray-200 rounded-lg'>
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
               <div  className='flex  items-center gap-5  p-3 border-b-2 '>
               <i className='ri-map-pin-2-fill'></i>
                 <div >
                   <h3 className='text-base font-medium'>202/NN</h3>
                   <p className='text-base -mt-1 text-gray-600' >Sikandra agra</p>
                 </div>
               </div>
               <div  className='flex  items-center gap-5 p-3  '>
               <i className='ri-currency-line'></i>
                 <div >
                   <h3 className='text-base font-medium'>$10.2</h3>
                   <p className='text-base -mt-1 text-gray-600' >Cash Cash</p>
                 </div>
               </div>
             </div  >
             <button onClick={()=>{
                props.setConfirmRidePopupPanel(true)
             }}
              className='w-full mt-2 bg-green-500 text-white font-semibold p-2 rounded-lg   '>Confirm</button>
           

           <button onClick={()=>{props.setRidePopupPanel(false)
             }}
              className='w-full mt-2 bg-red-500 text-white font-semibold p-2 rounded-lg   '>Ignore</button>
           </div>
            
            </div>
  )
}

export default Popup
