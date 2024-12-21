import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { DriverDataContext } from '../context/DriverContext';
import axios from 'axios';
const DriverSignup = () => {

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleType, setVehicleType] = useState('car'); 
  const [vehicleCapacity, setVehicleCapacity] = useState('');

  const { driver, setDriver } = useContext(DriverDataContext);



  const submitHandler = async(e) => {
    e.preventDefault();
    const DriverData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        vehicletype: vehicleType,
        capacity: vehicleCapacity,
      },
    };
    console.log(DriverData);
    
    const response = await axios.post(`http://localhost:4000/driver/register`, DriverData)
    if(response.status===201){
      const data = response.data
      setDriver(DriverData);
      localStorage.setItem('token',data.token)

      navigate('/driver-home')
      
    }

    

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('car');
    setVehicleCapacity('');
  };

  return (
    <div className="p-7 flex flex-col justify-between">
      <img className="w-20 mb-5" src={logo} alt="Logo" />
      <div>
        <form onSubmit={submitHandler}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-xl mb-2">First Name</h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl mb-2">Last Name</h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <h3 className="text-xl mb-2">Email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <h3 className="text-xl mb-2">Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-xl mb-2">Vehicle Type</h3>
              <select
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
              >
                <option value="car">car</option>
                <option value="motorbike">motorbike</option>
                <option value="auto">auto</option>
              </select>
            </div>
            <div className="w-1/2">
              <h3 className="text-xl mb-2">Vehicle Capacity</h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
                type="number"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder="Enter vehicle capacity"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <h3 className="text-xl mb-2">Vehicle Color</h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Enter vehicle color"
                required
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl mb-2">Vehicle Plate</h3>
              <input
                className="bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder="Enter vehicle plate"
                required
              />
            </div>
          </div>
          <button
            className="bg-[#f38110] text-black mb-3 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
            type="submit"
          >
            Driver SignUp
          </button>
          <p className="mb-3 text-center">
            Already registered as a driver?{' '}
            <Link to="/driver-login" className="text-[#2600ff]">
              Login here
            </Link>
          </p>
        </form>
        <p className="text-xs">
          By signing up, you agree to provide accurate and truthful information
          to ensure safe and reliable transportation services.
        </p>
      </div>
    </div>
  );
};

export default DriverSignup;
