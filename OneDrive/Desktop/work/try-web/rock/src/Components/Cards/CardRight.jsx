import React, { useEffect }  from 'react'
import './CardRight.css'
  import {motion} from 'framer-motion'
  import { useInView } from 'react-intersection-observer'
  import { useAnimation } from 'framer-motion'
export const CardRight = () => {


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
    animation.start({x:'50vw'})
  }
  
  if(inView){
    animationreverse.start({
      x:0,
      transition:{
        type:"spring",duration:10,bounce:0.2
      }
    })
  }
  if(!inView){
    animationreverse.start({x:'-100vw'})
  }
    },[inView])
  return (
    <>
  
<div className="container-fluid text-light mb-4 rightCard" ref={ref}  >
   
    <div className="row reversecol"  >
        <div className="col-12 col-sm-6  right_heading">
        {/* <h3>Artificial intelligence</h3> */}
        <motion.div className='scrollbarRight' animate={handlescrollbar} ></motion.div>
   
<p>
<span className='bold_letter'>we</span>  strive to empower you on your “Idea to Exit” journey in any tech enabled business.
</p>
        
        </div>  
        <div className="col-12  col-sm-4 col-md-4  ms-auto text-center left_serviceimg">
        <motion.img 
         animate={animation}
        className='img-fluid imge_icon' src="../assests/mission.gif" alt="" /> 
        </div>
    </div>
</div>

    </>
  )
}
