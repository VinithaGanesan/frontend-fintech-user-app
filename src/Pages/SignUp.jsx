import { Button } from '@mui/material';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { SignUpAPI } from '../utilities/useAPI';

export default function SignUp() {
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigator = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0) {
      fetch(SignUpAPI, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        if(result.success) {
          console.log('account created successfully');
          navigator('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      })
      
    } else {
      
    }
  }
  
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form' id='signupform' onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className='mb-3'>
          <label htmlFor="firstName">Firstname</label>
          <input
            ref={firstnameRef}
            type="text"
            placeholder='Enter your Firstname'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="lastName">Lastname</label>
          <input
            ref={lastnameRef}
            type="text"
            placeholder='Enter your Lastname'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            autoComplete='off'
            placeholder='Enter your Email'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            placeholder='*********'
          />
        </div>

        <Button type='submit' variant='outlined' style={{marginLeft: 80}}>SignUp</Button>
        <p>Have an Account?<Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}
