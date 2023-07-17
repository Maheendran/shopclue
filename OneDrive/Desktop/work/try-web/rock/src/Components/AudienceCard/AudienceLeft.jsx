import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
export const AudienceLeft = ({data}) => {
    const handlescrollbar = useAnimation();

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
  },[inView]);
  return (
    <>
    <div className="container-fluid text-light mb-4 " ref={ref} id='Entrepreneurs'>
    <div className="row" >
        <div className="col-12  col-sm-4  m-auto text-center left_serviceimg">
        <img  src={data.image} alt="" />
        </div>

        <div className="col-12 col-sm-6 left_heading">
        <motion.div className='scrollbar' animate={handlescrollbar} ></motion.div>
   
   <h3 className='text_bold'>{data.heading}</h3>
   <p>{data.description}</p>
        </div>
    </div>
</div></>
  )
}
