import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DriverLogout = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const logoutDriver = async () => {
        const response = await axios.get(`http://localhost:4000/driver/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          localStorage.removeItem('token');
          navigate('/driver-login'); 
        }
     
    };

    logoutDriver();
  }, [token, navigate]);

  return <div>Logging out...</div>;
};

export default DriverLogout;
