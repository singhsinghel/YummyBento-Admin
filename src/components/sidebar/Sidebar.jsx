import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar pt-2'>
      <div className="sidebar-options d-flex flex-column gap-4 pt-4">
        <NavLink to='/add' className="sidebar-option">
            <i class='bx bx-plus-circle fs-3 '></i>
           <p>Add items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <i class='bx bx-calendar-check fs-3' ></i>
          <p>Order Items</p>
        </NavLink>
        <NavLink to='/orders'  className="sidebar-option">
          <i class='bx bx-calendar-check fs-3'></i>
          <p>Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
