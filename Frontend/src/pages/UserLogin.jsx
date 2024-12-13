import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
const UserLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData,setUserData] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(email,password)
    setUserData({
      email:email,
      password:password
    })
    console.log(userData);
    
    setEmail('')
    setPassword('')
    
    
  }

  return (
    <div className='p-7 flex flex-col justify-between' >
      <img className='w-20 mb-5' src={logo} alt="" />
      <div>
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
          <button className='bg-[#f38110] text-black mb-3 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
           type="submit">Login</button>
          <p className=' mb-10 text-center'>New here?  <Link to='/signup' className=' text-[#2600ff] ' >Create Account</Link>
          </p>

      </form>
      </div>
      <div>
      <Link to='/driver-login' className='bg-[#6ECFB7] flex items-center justify-center text-black mb-7 rounded px-2 py-2 w-full text-lg placeholder:text-base'
           type="submit">Driver Login</Link>
      </div>

    </div>
  )
}

export default UserLogin
