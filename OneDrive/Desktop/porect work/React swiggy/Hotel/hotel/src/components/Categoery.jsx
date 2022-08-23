// import {FaPizzaSlice,FaHamburger} from "react-icon/"
import {GiSalmon,GiMeat}from "react-icons/gi"
import {BsEggFill} from 'react-icons/bs'
import {TbMeat} from 'react-icons/tb'
import {NavLink} from "react-router-dom"
import React from 'react'
import styled from "styled-components"
export const Categoery = () => {
return (
<List>
<NavLink to="/cusines/meat">
<Box>
<TbMeat size={"20px"}/>
<h4>meat</h4>  </Box></NavLink>  
<NavLink to="/cusines/egg">
<Box>
<BsEggFill  size={"20px"}/>
<h4>egg</h4> </Box></NavLink> 
<NavLink to="/cusines/salmon">
<Box>
<GiSalmon  size={"20px"}/>
<h4>salmon</h4>
</Box></NavLink>
<NavLink to="/cusines/pork">
<Box>
<GiMeat  size={"20px"}/>
<h4>pork</h4>
</Box></NavLink> 
</List>
)
}

const List =styled.div`
margin:auto;
width:450px;
display:flex;
justify-content:space-around;
a{
text-decoration:none
}
h4{
text-align:center
}


`
const Box=styled.div`
padding:8px;
font-size:12px;
align-item:center;
width:50px;
height:50px;
border-radius:50%;
// background-color:grey;

text-align:center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
h4{
margin-top:10px;
}
`