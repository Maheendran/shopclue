import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Link } from 'react-scroll';
import '../Navbar/Navbar.css'
const Navabr = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg nav_cover navMain">
  <div class="container-fluid nav_main">
    <NavLink to='/'>
      <img src="../assests/logo.png" alt="" height="50"/>
    </NavLink>
    <p class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa-solid fa-bars"></i></p>
      

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
      <li>   
   <NavLink to='/audience'>
   
   <p className="nav-item nav-link   text-dark  ">Audience </p>
</NavLink>
</li>

      <li>
       
       <Link
spy={true} to={"About"} smooth={true} >
  <p className="nav-item nav-link  text-dark ">Company</p>
</Link>
       </li>
        <li>
       
        <Link
spy={true} to={"service"} smooth={true} >
   <p className="nav-item nav-link  text-dark  ">Offerings</p>
</Link>
        </li>
<li>  
    <Link
spy={true} to={"contact"} smooth={true}>
   <p className="nav-item nav-link   text-dark  " href="">Contact <span class="sr-only">(current)</span></p>
</Link></li>

      </ul>
    </div>
  </div>
</nav>





    </>
  )
}

export default Navabr