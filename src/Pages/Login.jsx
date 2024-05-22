import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../App.css';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setUserId } from '../Redux/Reducers/AuthenticationReducer';
import { loginAPI } from '../utilities/useAPI';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigator = useNavigate();
  const dispatcher = useDispatch();
  const [userData, setUserData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email.length > 0 && password.length > 0) {
      fetch(loginAPI, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if (result.success && result.token) {
            localStorage.setItem("_tk", result.token);
            console.log(result.token);
            setUserData(result.userId);
            dispatcher(setLoggedIn(true));
            dispatcher(setUserId(result.userId));
            navigator('/app/dashboard');
          } else {

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
      <form className='sign-up-form' id='signupform' onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            type="email"
            autoComplete='off'
            id='email'
            placeholder='Enter your Email'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id='password'
            placeholder='*********'
          />
        </div>

        <Button type='submit' variant='outlined' style={{ marginLeft: 80 }}>Login</Button>

        <p>Don't Have Account?<Link to="/">SignUp</Link></p>
      </form>
    </div>
  )
}
