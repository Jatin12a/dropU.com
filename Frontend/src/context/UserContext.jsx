import React, { createContext, useState, useEffect } from 'react';

export const UserDataContext = createContext();

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);  // Add loading state

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Parse the stored user data
    }
    setLoading(false);  // Set loading to false once the check is complete
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));  // Save user data to localStorage
    }
  }, [user]);
  

  if (loading) {
    return <div>Loading...</div>; // Show loading screen while loading user data
  }

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}
