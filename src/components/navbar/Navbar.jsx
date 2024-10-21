import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets.js'
import { useContext } from 'react'
import { StoreContext } from '../../Context/Context.jsx'
import {toast} from 'react-toastify'
const Navbar = () => {
  const{setToken}=useContext(StoreContext);

  const adminLogout=()=>{
    localStorage.removeItem('token');
    setToken('');
    toast.success('logged out successfully');
  }
  return (
    <div className='navbar sticky-top' style={{backgroundColor:'#fcfcfc'}}>
        <div className='title'>
          <span className='logo h4' style={{color:'tomato'}}>Yummy</span>
          <span className='text-secondary h4'>Bento</span>
          <span className='fw-bold fs-4 logo' style={{color:'tomato'}}>.</span><br />
          <p className='mb-0 text-dark-emphasis'>Admin panel</p>
      </div>
      <div className="icon position-relative">
        <img className='cursor-pointer' src={assets.profile_image} alt="" />
        <div onClick={adminLogout} className="log-out position-absolute fw-semibold  p-2">
            <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
