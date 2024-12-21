import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      
        const response = await axios.get(`http://localhost:4000/users/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/login');
        }
       
    };
    logoutUser();
  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default UserLogout;
