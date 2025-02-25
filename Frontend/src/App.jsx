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
import UserLogout from './pages/UserLogout'
import DriverHome from './pages/DriverHome'
import DriverProtected from './pages/DriverProtected'
import DriverLogout from './pages/DriverLogout'
import Riding from './pages/Riding'
import DriverRiding from './pages/DriverRiding'

const App = () => {
 

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
      <Route path='/user/logout' element={
        <UserProtected>
          <UserLogout/>
        </UserProtected>
      }/>
      <Route path='/driver-home' element={<DriverProtected>
        <DriverHome/>
      </DriverProtected>}/>
      <Route path='/driver-logout' element={
        <DriverProtected>
          <DriverLogout/>
        </DriverProtected>
      }/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path='/driver-riding' element={<DriverRiding/>}/>

    </Routes>
  )
}

export default App
