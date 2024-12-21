import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverProtected = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/driver-login');
    }
  }, [token, navigate]);

  return token ? <>{children}</> : null;
};

export default DriverProtected;
