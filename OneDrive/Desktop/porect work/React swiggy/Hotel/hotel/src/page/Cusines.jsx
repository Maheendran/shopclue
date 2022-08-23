

import styled from "styled-components"
import '../style/Cusines.css'
import '@splidejs/react-splide/css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {NavLink} from "react-router-dom"
import {Loading} from'../components/Loading'
function Cusines(){
const[popular,setPopular]=useState([])
const[load,setLoad]=useState("false")
const param=useParams()

    const getCusines=()=>{
      
      setLoad(true)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param.type}`)
      
        .then(res=>res.json())
        .then((res)=>{
          setPopular( res.meals)
           console.log(popular)   
           setLoad(false)
        })
      
       
    }
    
    useEffect(()=>{
        getCusines(param.type)
    },[param.type])
  return (
   
  <>
     <div> {load&& <Loading/>}  </div>
   
  <Grid>
   
 {popular.map((e)=>{
          return(
          <NavLink to={`/search/${e.strMeal}`}>
               <Card >
             
             <img src={e.strMealThumb} alt="" />
             <p>{e.strMeal}</p>
             </Card>
             </NavLink>
            
          )
        })}
      </Grid>

      </>
  )
 
  
}
const Grid=styled.div`
// display:grid;
// grid-template-columns:repeat((20rem,1fr));
// grid-gap:3rem;


margin:auto;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
`

const Card=styled.div`

font-Weight:600
min-heigth:25rem;
border-radius:2rem
overflow:hidden;

img{
 
width:13rem;
height:13rem;
  border-radius:3rem;
  padding:1rem;
}

`

export default Cusines