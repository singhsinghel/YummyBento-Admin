import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets.js'
const Navbar = () => {
  return (
    <div className='navbar sticky-top' style={{backgroundColor:'#fcfcfc'}}>
        <div className='title'>
          <span className='logo h4' style={{color:'tomato'}}>Yummy</span>
          <span className='text-secondary h4'>Bento</span>
          <span className='fw-bold fs-4 logo' style={{color:'tomato'}}>.</span><br />
          <p className='mb-0 text-dark-emphasis'>Admin panel</p>
      </div>
      <div className="icon">
        <img src={assets.profile_image} alt="" />
      </div>
    </div>
  )
}

export default Navbar
