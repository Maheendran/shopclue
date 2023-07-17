import React from 'react'
import { CardRight } from '../../Components/Cards/CardRight'
import Cardleft from '../../Components/Cards/Cardleft'
import { NavLink } from 'react-router-dom'
import './About.css'
const About = () => {
  return (
    <>

    <div id='About' className="container about_box">
  
    <h2 className='text_bold mb-4 mt-4 text-center'>Who & What of Rockfort Labs ?</h2>
  
  
  <p>
  Rockfort Labs is a USA (Washington DC & Silicon Valley)  based DeepTech and Digital Transformation enterprise with a Global presence, specializing in AI, ML, AR, VR and IIoT innovation. 
  Our intelligent systems analyze complex, live and siloed data and provide actionable insights and deliver business value to solve use case specific operational challenges. Our custom algorithms adapt and learn from vast datasets, empowering clients to make data-driven decisions presented in intuitive dash board driven user interfaces. By prioritizing collaboration and by understanding client’s needs deeply, we deliver technologically superior solutions aligned with our customer’s business needs, goals and growth roadmap. We, at Rockfort Labs look to serving you in ways that you excel in your core business.</p>

  <h2 className='text_bold mb-4 mt-4 text-center'>How we do it ?</h2>
  
  <p>
    Free enterprise and entrepreneurship is at our heart and we follow a Venture Studio model. Whether you are a student starting out in technology and business, or an aspiring Entrepreneur with ideas, or startup minded Entrepreneur In Residence (EIR), we have a seat at our table for each of you and we look forward to serving you through your personalized journey in an “Idea to Exit”  format, which is our speciality.
  </p>
  <NavLink to={'/team'}>
  <button className='team_btn'>Our team</button>
  </NavLink>
  <Cardleft/>
  <CardRight/>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default About