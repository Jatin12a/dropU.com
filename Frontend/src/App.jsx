import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import DriverLogin from './pages/DriverLogin'
import DriverSignup from './pages/DriverSignup'
import { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtected from './pages/UserProtected'
const App = () => {

 const ans= useContext(UserDataContext)
 console.log(ans);
 

  return (
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/login' element={<UserLogin/>}/>
      <Route path='/signup' element={<UserSignup/>}/>
      <Route path='/driver-login' element={<DriverLogin/>}/>
      <Route path='/driver-signup' element={<DriverSignup/>}/>
      <Route path='/home' element={<UserProtected>
        <Home/>
      </UserProtected>}/>
    </Routes>
  )
}

export default App
