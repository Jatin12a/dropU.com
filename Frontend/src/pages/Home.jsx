import React from 'react'
import { Link } from 'react-router-dom'
import DropU from '../assets/DropU.png'
const Home = () => {
  return (
    <div>
      <div className='h-screen  flex justify-between flex-col w-full bg-red-400'>
        <img className='h-screen  ' src={DropU} alt="" />
        <div className='bg-white py-5 px-5'>
            <h2 className='text-3xl font-bold text-center pb-5 '>Ride with us</h2>
            <Link to="/login" className=' flex items-center justify-center text-2xl bg-black text-white w-full rounded ' >Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
