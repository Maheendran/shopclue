import React from 'react'
import './Service.css'
const Service = () => {
  return (
    <>
    
       
<div className="container-fluid" id='service'>
       <div className="col-12 mt-2 text-center ">
            <h2 className='text_bold mb-4'> Offerings</h2>
        </div>
    <div className="row service_row">   
       
        <div className="col-12 col-md-6 col-lg-3 card_main   mx-auto text-center mb-5">
<div className="col-12   service_img" >
    <img src="../assests/Ideation.jpg" alt="" />
</div>

<div className="col-12 service_content ">
    < p>
    Rockfort Labs is your venture studio. Join us in ideating your favorite game changing business ideas, get your market validation done, MVP created, product market fit established at scale, and get your idea on the road to commercial success. Whether it is deep tech expertise to bring your idea to life or Business expertise to arrive at an optimum strategy or Global team(s) to mentor you and execute your strategy, Rockfort Labs has you covered.  What are you waiting for? Send us a ping today.
    </p>
</div>
<div className='card_btn'>
    <button >Ideation</button>
</div>

        </div>

        <div className="col-12 col-md-6 col-lg-3 card_main mx-auto  text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
    <img  src='../assests/IIoT.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
 

Rockfort Labs offers advanced IIoT solutions, helping businesses leverage the Industrial Internet of Things. Whether it is for your factory, manufacturing or operational prcss or for healthcare use cases, We help architect the right IIOT solution for your application needs, connect devices, collect real-time data, and enable seamless communication between machines and systems. Our solutions enhance operational efficiency, optimize processes, and unlock growth opportunities in your core businesses by optimizing everything from energy utilization, energy optimization and management to end to end operational management.

    </p>
</div>
<div className='card_btn'>

    <button >IIOT offerings</button>
</div>

        </div>
        <div className="col-12  col-md-6 col-lg-3 card_main  mx-auto text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
<img  src='../assests/ML.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
    Rockfort Labs, specializes in creating and delivering comprehensive End to End deep tech solutions that include AI/ML products, platforms,and turn key implementations. Our experienced team unlocks valuable insights from your data using machine learning and artificial intelligence. We develop sophisticated algorithms and models for process automation, data-driven decisions, and deliver improved optimization and increased efficiency. From predictive and prescriptive  analytics to 
    causal inferencing driven recommendation systems, our offerings help businesses leverage advanced technologies and stay ahead in the digitally transformed world.
    </p>
</div>
<div className='card_btn'>
<button >AI/ML solutions </button>

</div>

        </div>
        <div className="col-12  col-md-6 col-lg-3 card_main  mx-auto text-center  mb-5">
<div className="col-12 col-sm-12 service_img">
<img  src='../assests/VR.jpg' alt="" />
</div>
<div className="col-12 service_content">
    <p >
    Rockfort Labs pioneers transformative AR/VR solutions across industries.
     From immersive training simulations to augmented reality marketing campaigns, we merge physical and digital realms to captivate audiences. Our virtual tours transcend boundaries, while VR gaming delivers unparalleled immersion. Collaborate effortlessly with our virtual workspaces, and revolutionize education and healthcare through interactive experiences. Join us at Rockfort Labs as we push the boundaries of AR/VR,
     unlocking new possibilities and delivering exceptional impact in a single line.
   
    </p>
</div>
<div className='card_btn'>
 <button >AR/VR solutions </button>   
</div>

        </div>
    </div>
</div>

    
    
    
    </>
  )
}

export default Service