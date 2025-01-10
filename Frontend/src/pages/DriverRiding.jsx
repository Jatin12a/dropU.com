import React, { useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";

const DriverRiding = () => {

  const [finishRide, setFinishRide] = useState(false)
  const FinishRideRef = useRef(null)

  useGSAP(function(){
    if(finishRide){
     gsap.to(
      FinishRideRef.current,{
         transform:'translateY(0)'
       })
    }else{
     gsap.to(
       FinishRideRef.current,{
         transform:'translateY(100%)'
       }
     )
    }
   },[finishRide])



  return (
    <div className='h-screen'>
    <div className='fixed w-full p-3 top-0 flex items-center justify-between'>
      <img className='w-16' src={logo} alt="" />
    <Link to='/driver-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='ri-logout-box-r-line text-lg font-semibold'></i>
      </Link>
    </div>
    <div className='h-4/5'>
    <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

    </div> 
    <div className='h-1/5 p-3 items-center flex justify-between bg-yellow-400 '>
        <h4 className='text-2xl font-semibold'>4km away</h4>
        <button
        onClick={()=>{
          setFinishRide(true)
        }}
          className='w-[50%] mt-2 bg-red-500 text-white font-semibold p-2 rounded-lg '>Finish</button>
    
    </div>

    <div ref={FinishRideRef}  className='fixed w-full z-10 bottom-0 bg-white px-12 py-6 '>
          <FinishRide setFinishRide={setFinishRide} />
          </div>

    
  </div>
  )
}

export default DriverRiding
