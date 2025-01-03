import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()


export default function UserContext({children}) {

  const [user,setUser]= useState({
    email:'',
    fullName:{
      firstname:'',
      lastname:'',
    }
  })


  return (
    <div>
      <UserDataContext.Provider value={{user,setUser}}>
        {children}
      </UserDataContext.Provider>
      
    </div>
  )
}
