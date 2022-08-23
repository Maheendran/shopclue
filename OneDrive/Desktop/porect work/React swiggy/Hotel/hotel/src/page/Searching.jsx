import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{BsSearch}from'react-icons/bs'
import styled from 'styled-components';

export const Searching = () => {

    const Navigate=useNavigate()

    const[data,setData]=useState("")
    const handleclick=(e)=>{
    e.preventDefault();
    Navigate("/cusines/"+data)
    }
  return (
    <div>

        <formstyle  >
<Input>
        <input type="text" placeholder='search' onChange={(e)=>setData(e.target.value)}
         value={data}/>
     <BsSearch onClick={handleclick}></BsSearch>
     </Input>
        </formstyle>
      
    </div>
  )
}
const Input=styled.div`
input{
margin:20px;
padding:4px 10px;
width:500px;
height:30px;
border-radius:5px;
margin-bottom:20px;
border:0.25px solid black;


}

`