import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password);
    setUserData({
      fullName:{
        firstname: firstname,
        lastname: lastname},
      email: email,
      password: password,
    });
    console.log(userData);

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 flex flex-col justify-between'>
      <img className='w-20 mb-5' src={logo} alt="Logo" />
      <div>
        <form onSubmit={(e) => { submitHandler(e); }}>
          <div className='flex gap-4'>
            <div className='w-1/2'>
              <h3 className='text-xl mb-2'>First Name</h3>
              <input
                className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                name="firstname"
                placeholder="Enter first name"
                required
              />
            </div>
            <div className='w-1/2'>
              <h3 className='text-xl mb-2'>Last Name</h3>
              <input
                className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                name="lastname"
                placeholder="Enter last name"
                required
              />
            </div>
          </div>
          <h3 className='text-xl mb-2'>Email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Enter email"
            required
          />
          <h3 className='text-xl mb-2'>Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Enter password"
            required
          />
          <button
            className='bg-[#f38110] text-black mb-3 rounded px-2 py-2 border w-full text-lg placeholder:text-base'
            type="submit">
            Sign Up
          </button>
          <p className='mb-3 text-center'>
            Already have an account?{' '}
            <Link to='/login' className='text-[#2600ff]'>Login</Link>
          </p>
        </form>
        <p className='text-xs'>By signing up, you agree to provide accurate and truthful information to ensure safe and reliable transportation services.</p>

      </div>
    </div>
  );
};

export default Signup;
