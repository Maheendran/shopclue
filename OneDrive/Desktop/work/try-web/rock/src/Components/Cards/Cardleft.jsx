import React, { useEffect } from 'react'
import './CardRight.css'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
const Cardleft = () => {
    const animationreverse=useAnimation()
    const animation=useAnimation()
  const handlescrollbar=useAnimation()
    const{ref,inView}=useInView({
      threshold:0.3
    })
    useEffect(()=>{
      if(inView){
        handlescrollbar.start({
          top:5,
          transition:{
            type:"spring",duration:10,bounce:0.1
          }
        })
      }
if(!inView){
  handlescrollbar.start({
   bottom:0
  })
}


  if(inView){
    animation.start({
      x:0,
      transition:{
        type:"spring",duration:2,bounce:0.2
      }
    })
  }
  if(!inView){
    animation.start({x:'100vw'})
 
  }
  if(inView){
    animationreverse.start({
      x:0,
      transition:{
        type:"spring",duration:2,bounce:0.2
      }
    })

  }
  if(!inView){
    animationreverse.start({x:'-100vw'})
 
  }
    },[inView])
  return (
    <>
      
<div className="container-fluid text-light mb-4 mt-5 " ref={ref}>
    <div className="row" >
        <div className="col-12  col-sm-4 col-md-4   me-auto text-center left_serviceimg">
        
        <motion.img 
        animate={animationreverse}
        className='img-fluid imge_icon' src="../assests/vision.gif" alt="" /> 
       
        </div>

        <div className="col-12 col-sm-6  left_heading">
        <motion.div className='scrollbar' animate={handlescrollbar} ></motion.div>
   
   <p>
  <span className='bold_letter'>We </span>
   believe in the transformative power of technology to solve business and societal needs. Our vision is to leverage our track record in techno commercial space to enable you to excel at your core business. 

   </p>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Cardleft
