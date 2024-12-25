import React, { useRef, useState } from 'react'
import logo from '../assets/Logo.png'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css'
import LocationSearch from '../components/LocationSearch';
import VehicleChoice from '../components/vehicleChoice';
import SelectedVehicle from '../components/SelectedVehicle';
export default function Home() {

  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')

  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelClose = useRef(null)
  const vehiclePanelRef = useRef(null)
  const [vehicleChoice, setVehicleChoice] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(false)
  const selectedVehicleRef = useRef(null)

  const submitHandler = (e)=>{
    e.preventDefault()
    
  }
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:20,
        // opacity:1
      })
      gsap.to(panelClose.current,{
        opacity:1
      })
    }
    else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0,
        // opacity:0
      })
      gsap.to(panelClose.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
   if(vehicleChoice){
    gsap.to(
      vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
   }else{
    gsap.to(
      vehiclePanelRef.current,{
        transform:'translateY(100%)'
      }
    )
   }
  },[vehicleChoice])

  useGSAP(function(){
    if(selectedVehicle){
     gsap.to(
       selectedVehicleRef.current,{
         transform:'translateY(0)'
       })
    }else{
     gsap.to(
       selectedVehicleRef.current,{
         transform:'translateY(100%)'
       }
     )
    }
   },[selectedVehicle])



  return (
    <div className='h-screen relative overflow-hidden' > 
      <img className='w-20 absolute left-5 top-5' src={logo} alt="" />
      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />
      </div>
      <div className=' absolute top-0 w-full h-full flex flex-col justify-end '>
        <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelClose} onClick={()=>{
          setPanelOpen(false)
        }}
         className='absolute opacity-0 top-6 right-6 text-xl '>
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
        <h4 className='text-3xl font-semibold ' >Find a trip </h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} >
          
          <div className="line absolute h-[35%] w-1 top-[40%] left-10 bg-gray-800 rounded-full"></div>
          <div className="line absolute h-[35%] w-1 top-[40%] left-[90%] bg-gray-800 rounded-full"></div>
          
          <input 
          onClick={()=>{
            setPanelOpen(true)
          }}
          className='bg-[#eeeeee] px-12 py-2 test-xl rounded-lg w-full mb-4 mt-3 '
           type="text"
          placeholder='add a pickup location'
          value={pickup}
          onChange={(e)=>{setPickup(e.target.value)}}
          />
          <input className='bg-[#eeeeee] px-12 py-2 test-xl rounded-lg w-full ' 
          type="text" 
          placeholder='add a drop off location' 
          value={dropoff}
          onChange={(e)=>{setDropoff(e.target.value)}}
          onClick={()=>{
            setPanelOpen(true)
          }}
          />
        </form>
        </div>
        <div ref={panelRef} className='bg-white h-[0%]'>
              <LocationSearch  setPanelOpen={setPanelOpen} setVehicleChoice={setVehicleChoice} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6 '>
      <VehicleChoice setSelectedVehicle={setSelectedVehicle} setVehicleChoice={setVehicleChoice} />

      </div>
      <div ref={selectedVehicleRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6 '>
      <SelectedVehicle setSelectedVehicle={setSelectedVehicle} />

      </div>
    </div>
  ) 
}
