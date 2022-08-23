import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
function Veggie(){
const[Veggie,setVeggie]=useState([])

    const getveggie=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
        // ) 
        .then(res=>res.json())
        .then((res)=>{
          setVeggie( res.meals)
           console.log(Veggie)   
        })
       
    }
    
    useEffect(()=>{
      getveggie()
    })
  return (
    <div>
  
      <Wrapper>
        <h3 style={{textAlign:"left",fontSize:"30px",padding:"10px"}}>Chicken Special</h3>
  <Splide options={{perPage:4,
   pagination:false,drag:'free',
  gap:"1rem"}}>
 {Veggie.map((e)=>{
          return(
            <SplideSlide key={e.idMeal}>

               <Card >
            
             <img src={e.strMealThumb} alt="" />
             <h3>{e.strMeal}</h3>
             </Card>

            </SplideSlide>
          )
        })}
          </Splide>
      </Wrapper>
    

  </div>

  )
  
}
const Wrapper= styled.div`
  margin:4rem 0rem;
  
  `

const Card=styled.div`

font-Weight:600
min-heigth:10rem;
border-radius:2rem
overflow:hidden;

img{
 
width:12rem;
height:13rem;
  border-radius:3rem;
  padding:1rem;
}
`

export default Veggie