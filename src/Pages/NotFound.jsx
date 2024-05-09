import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>404 Page NotFound</h2>
        <p>Have an Account?<Link to="/login">Login</Link></p>
    </div>
  )
}
