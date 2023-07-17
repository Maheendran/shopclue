import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [mobile,setMobile]=useState(0)
  const [message,setMessage]=useState('')
const [status,setStatus]=useState(false)

  function sendMail(){

if(email && name && mobile && message){
  document.getElementById('send_btn').innerHTML="Sending"
  var params={
      user_name:name,
     user_email:email,
     mobile:mobile,
      message:message
   }
   const serviceID="service_2c7bf5t";
   const templateID="template_5bw0e8m";
 
   emailjs.send(serviceID,templateID,params,'wMAPdJWPeh0BIEZDx').then(()=>{
    setStatus(true)
    document.getElementById('error').innerHTML="Your message has been sent. Thank you!"
  
    document.getElementById('send_btn').innerHTML="Submit"
    setEmail('')
    setMobile(0)
    setMessage('')
    setName('')
    document.getElementById('email').value=''
    document.getElementById('name').value=''
    document.getElementById('message').value=''
    document.getElementById('mobile').value=''
   })
   .catch((err)=>{
    setStatus(false)
    document.getElementById('error').innerHTML="Message sending failed"
   })
   setTimeout(() => {
    setStatus(false)
    document.getElementById('error').innerHTML=""
  }, 5000);
 
}else{
  setStatus(false)
  document.getElementById('error').innerHTML="Fill all columns"
  setTimeout(() => {
    document.getElementById('error').innerHTML=""
  }, 2000);
}

  

  }
  return (
    <>
    <div className="container" id='contact'>
    <h2 className='text-center mt-5 mb-4 text_bold'>Contact</h2>

    <div className="row">
        <div className="col-12 col-sm-8 contact_img">
        <img className='img-fluid ' src="../assests/RFLMap.gif" alt="" />
        </div>
        <div className="col-10 col-sm-4 m-auto contact_form">

        <input type="text" placeholder='name' id='name' onChange={(e)=>setName(e.target.value)} />
<input type="email" placeholder='email' id='email' onChange={(e)=>setEmail(e.target.value)} />
<input type="number" placeholder='mobile' id='mobile' onChange={(e)=>setMobile(e.target.value)}/>
<textarea name="message"  cols="30" rows="10" id='message' placeholder='message' onChange={(e)=>setMessage(e.target.value)}></textarea>
<p  className={status ?'error_succes' :'error_pop'} id='error'></p>
<button onClick={()=>sendMail()} id='send_btn'>submit</button>

</div>

    </div>
   
</div>

    </>
  )
}

export default Contact