import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from "styled-components"
import {Splide,SplideSlide} from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

function Popular(){
const[popular,setPopular]=useState([])
    const getpopular=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=chocolate`)
        .then(res=>res.json())
        .then((res)=>{
          setPopular( res.meals)
           console.log(popular)   
        })
       
    }
    
    useEffect(()=>{
        getpopular()
    })
  return (
    <div>
  
      <Wrapper>
        <h3 style={{textAlign:"left",fontSize:"30px",padding:"10px"}}>popular food</h3>
  <Splide options={{perPage:3,
   pagination:false,drag:'free',
  gap:"5rem"}}>
 {popular.map((e)=>{
          return(
            <SplideSlide key={e.idMeal}>

               <Card >
              <Link to={`/search/${e.strMeal}`}>

             <img src={e.strMealThumb} alt="" />
             <h3>{e.strMeal}</h3>
             </Link>
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
min-heigth:25rem;
border-radius:2rem
overflow:hidden;
h3{
  text-decoration:none;
};

img{
 
width:16rem;
height:15rem;
  border-radius:3rem;
  padding:1rem;
}
`

export default Popular