import React from 'react'
import './NavbarTwo.css'
import { NavLink } from 'react-router-dom'

const NavbarTwo = () => {
    return (
        <>
        
        <nav class="navbar navbar-expand-lg">
      <div class="container-fluid nav_main">
        <NavLink to='/'>
          <img src="../assests/logo.png" alt="" height="50"/>
        </NavLink>
        <p class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  <i class="fa-solid fa-bars"></i></p>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
          <ul class="navbar-nav ms-auto">
         
          <li class="nav-item ">
            <NavLink  to='/'>
    
       <p  className="nav-item nav-link nav_header">     
         <span  className='hidden'>
    
    <img src="../assests/arrow.gif" className='nav_arrow' alt="" />
           {/* <MdKeyboardArrowLeft /> */}
       
       </span> 
       <span className='hidden'> ||</span> Home </p>
    </NavLink>
    
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
            
    
        </>
      )
}

export default NavbarTwo