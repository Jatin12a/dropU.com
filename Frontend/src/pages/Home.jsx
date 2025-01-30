import React, { useRef, useState } from 'react';
import axios from 'axios';
import logo from '../assets/Logo.png';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearch from '../components/LocationSearch';
import VehicleChoice from '../components/vehicleChoice';
import SelectedVehicle from '../components/SelectedVehicle';
import LookingDriver from '../components/LookingDriver';
import WaitingDriver from '../components/WaitingDriver';

export default function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDropoff] = useState('');
  const [ activeField, setActiveField ] = useState(null)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehicleChoice, setVehicleChoice] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(false);
  const selectedVehicleRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const WaitingFoundRef = useRef(null);
  const [waitingFound, setWaitingFound] = useState(false);
  const [fare,setFare] = useState({});
  const [ vehicletype, setVehicleType ] = useState(null)
  const [ ride, setRide ] = useState(null)

  const handlePickupChange = async (e) => {
    setPickup(e.target.value)
    
    try {
        const response = await axios.get(`http://localhost:4000/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        console.log('Error')
    }
}


  const handleDestinationChange = async (e) => {
    setDropoff(e.target.value)
    try {
        const response = await axios.get(`http://localhost:4000/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        console.log('error');
        
    }
}

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 20,
      });
      gsap.to(panelClose.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
      });
      gsap.to(panelClose.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehicleChoice) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehicleChoice]);

  useGSAP(() => {
    if (selectedVehicle) {
      gsap.to(selectedVehicleRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(selectedVehicleRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [selectedVehicle]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(VehicleFoundRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(VehicleFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingFound) {
      gsap.to(WaitingFoundRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(WaitingFoundRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [waitingFound]);

 async function findtrip(){
    setPanelOpen(false)
    setVehicleChoice(true)

    const response = await axios.get(`http://localhost:4000/rides/get-fare`,{
      params:{pickup,destination},
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    setFare(response.data); 
  }

  async function createRide() {
    const response = await axios.post(`http://localhost:4000/rides/create`, {
        pickup,
        destination,
        vehicletype
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    console.log(response.data);
    
}
  

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-20 absolute left-5 top-5' src={logo} alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src=" https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png" alt="" />
      </div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-end'>
        <div className='h-[28%] p-6 bg-white relative'>
          <h5 ref={panelClose} onClick={() => { setPanelOpen(false); }} className='absolute opacity-0 top-6 right-6 text-xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
          <div className="line absolute h-[40%] w-1 top-[48%] right-[90%] bg-gray-800 rounded-full"></div>
            <div className="line absolute h-[40%] w-1 top-[48%] left-[90%] bg-gray-800 rounded-full"></div>
            <input
              onClick={() => { setPanelOpen(true)
                 setActiveField('pickup') }}
              className='bg-[#eeeeee] px-12 py-2 test-xl rounded-lg w-full mb-4 mt-3'
              type="text"
              placeholder='add a pickup location'
              value={pickup}
              onChange={handlePickupChange}
              
            />
            <input
              onClick={() => {
                  setPanelOpen(true)
                  setActiveField('destination')
              }}
              value={destination}
              onChange={handleDestinationChange}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-2'
              type="text"
               placeholder='Enter your destination' />
              
          </form>
          <button onClick={()=>{findtrip()}}
           className='bg-black  text-white w-full px-4 py-2 rounded-lg mt-2'>
                  Find Trip
              </button>
          
        </div>
        <div ref={panelRef} className='bg-white h-[0%] mt-4 '>
          <LocationSearch
           suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehicleChoice={setVehicleChoice}
            setPickup={setPickup}
            setDropoff={setDropoff}
            activeField={activeField}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-6'>
        <VehicleChoice
         selectVehicle={setVehicleType}
        fare={fare} setSelectedVehicle={setSelectedVehicle} setVehicleChoice={setVehicleChoice} />
      </div>
      <div ref={selectedVehicleRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-12 py-6'>
        <SelectedVehicle
           createRide={createRide}
           pickup={pickup}
           destination={destination}
           fare={fare}
           vehicletype={vehicletype}
           setSelectedVehicle={setSelectedVehicle} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={VehicleFoundRef} className='fixed w-full translate-y-full z-10 bottom-0 bg-white px-12 py-6'>
        <LookingDriver
         createRide={createRide}
         pickup={pickup}
         destination={destination}
         fare={fare}
         vehicletype={vehicletype}
         setVehicleFound={setVehicleFound} setWaitingFound={setWaitingFound} />
      </div>
      <div ref={WaitingFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-12 py-6'>
        <WaitingDriver setWaitingFound={setWaitingFound} />
      </div>
    </div>
  );
}