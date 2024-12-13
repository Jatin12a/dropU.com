import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>}/>
      <Route path='/driver-login' element={<DriverLogin/>}/>
      <Route path='/driver-signup' element={<DriverSignup/>}/>

    </Routes>
  )
}

export default App
