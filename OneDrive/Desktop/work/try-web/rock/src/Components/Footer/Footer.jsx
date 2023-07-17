import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
        
        
        <div className="container-fluid footer_main">
            <div className="col-12  text-center m-auto p-2">
                <p className='text-light footer_p'>© Copyright 2015-2023 All Rights Reserved by Rockfort Labs Inc</p>
              <div className="col-6 col-sm-1  m-auto d-flex justify-content-between">
                 <Link  target='blank'  to={'https://www.linkedin.com/company/rockfort-labs'}>
                   <AiFillLinkedin className='footer_icon'/>
                </Link>
               
                <AiFillGithub className='footer_icon'/>
              </div>
               
            </div>
    
         
        </div>
        
        
        </>
      )
}

export default Footer