import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
const DriverLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [DriverData,setDriverData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(email,password)
    setDriverData({
      email:email,
      password:password
    })
    console.log(DriverData);
    
    setEmail('')
    setPassword('')
    
    
  }

  return (
    <div className='p-7 flex flex-col justify-between' >
      <div>
      <img className='w-20 mb-5' src={logo} alt="" />

      <form onSubmit={(e)=>{submitHandler(e)}} >
        <h3 className='text-xl mb-2' >Email here.</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          name="email"
          placeholder="Enter email"
          required  />
          <h3 className='text-xl mb-2' >Password here.</h3>
          <input className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          name="password"
          placeholder="Enter password"
          required />
          <button className='bg-[#f38110] text-black mb-2 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
           type="submit">Login</button>
          <p className=' mb-10 text-center'>New Driver?  <Link to='/driver-signup' className=' text-[#2600ff] ' >Driver Register</Link>
          </p>

      </form>
      </div>
      <div>
      <Link to='/login' className='bg-[#6ECFB7] flex items-center justify-center text-black mb-7 rounded px-2 py-2 w-full text-lg placeholder:text-base'
           type="submit">User Login</Link>
      </div>

    </div>
  )
}

export default DriverLogin
