import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='main'>
     <img src={assets.error_page} alt="" />

      <p>Uh-oh! Looks like the page you are trying to access,<br />doesn't exist.Please try again later</p>

      <Link to='/'>
      <button> Go Home</button>
      </Link> 
    </div>
  )
}

export default Error