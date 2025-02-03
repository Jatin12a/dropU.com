import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import DriverDetails from '../components/DriverDetails'
import Popup from '../components/Popup'
import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import ConfirmPopup from '../components/ConfirmPopup'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { DriverDataContext } from '../context/DriverContext'
import axios from 'axios'

export default function DriverHome() {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)

  const [ConfirmridePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ConfirmridePopupPanelRef = useRef(null)

  const [ride, setRide] = useState(null)

  const { socket } = useContext(SocketContext)
  const { driver } = useContext(DriverDataContext)
  
  useEffect(() => {
    if (!driver) return;
  
    socket.emit('join', {
      userId: driver._id,
      userType: 'captain'
    });
  
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: driver._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude
            }
          });
        });
      }
    };
  
    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();
  
    return () => clearInterval(locationInterval); // Cleanup interval
  }, [driver]); // Add driver as a dependency
  
  socket.on('new-ride', (data) => {

    setRide(data)
    setRidePopupPanel(true)

  })

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(
        ridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(
        ridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      }
      )
    }
  }, [ridePopupPanel])


  useGSAP(function () {
    if (ConfirmridePopupPanel) {
      gsap.to(
        ConfirmridePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(
        ConfirmridePopupPanelRef.current, {
        transform: 'translateY(100%)'
      }
      )
    }
  }, [ConfirmridePopupPanel])

  return (
    <div className='h-screen'>
      <div className='fixed w-full p-3 top-0 flex items-center justify-between'>
        <img className='w-16' src={logo} alt="" />
        <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className='ri-logout-box-r-line text-lg font-semibold'></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />

      </div>
      <div className='h-2/5 p-3'>
        <DriverDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full translate-y-full  z-10 bottom-0 bg-white px-6 py-6  '>
        <Popup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={ConfirmridePopupPanelRef} className='fixed w-full h-screen translate-y-full  z-10 bottom-0 bg-white px-6 py-6  '>
        <ConfirmPopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}
