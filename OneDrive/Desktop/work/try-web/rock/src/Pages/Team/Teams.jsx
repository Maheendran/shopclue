import React from 'react'
import NavbarTwo from '../../Components/NavbarTwo/NavbarTwo'
import { Typewriter } from 'react-simple-typewriter'
import Footer from '../../Components/Footer/Footer'
import './Teams.css'
const Teams = () => {
  return (
    <>
      <NavbarTwo/>
    <div className='teamhead text-center pt-5'> 
    <div className="col-12 col-lg-6 m-auto">
          <img className='img-fluid' src="../assests/Team.gif" alt="" />
    </div>

    {/* <h1 style={{fontWeight:'600'}}>
          <Typewriter cursor loop={0} 
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
           words={['Page under construction']}/>
        
          </h1> 
      */}
    </div>
    
    <Footer/>
    </>
  )
}

export default Teams