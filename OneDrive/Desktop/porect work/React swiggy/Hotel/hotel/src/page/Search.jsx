import styled from "styled-components";

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Loading } from "../components/Loading";
function Search() {
  const [popular, setPopular] = useState([]);
  const param = useParams();
  const [data, setData] = useState(false);
  const [load, setLoad] = useState("false");

  const getCusines = () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${param.type_name}`
    )
     
      .then((res) => res.json())
      .then((res) => {
        setPopular(res.meals);
        console.log(popular);
      });
  };

  useEffect(() => {
    getCusines(param.type_name);
  }, [param.type_name]);

  return (
    <>
      <div> {load && <Loading />} </div>

      {popular.map((e) => {
        return (
          <NavLink to={`/search/${e.strMeal}`}>
            <Card>
              <h3>{e.strMeal}</h3>
              <img src={e.strMealThumb} alt="" />
              <button
                style={{ padding: "5px 10px" }}
                onClick={() => setData("watch now")}
              >
                ingridents
              </button>
              <button
                style={{ padding: "5px 10px" }}
                onClick={() => setData("ingridents")}
              >
                watchnow
              </button>

              {data === "watch now" && (
                <p style={{ padding: "10px" }}>{e.strInstructions}</p>
              )}
              {data === "ingridents" && (
                <p style={{ padding: "10px" }}>{e.strYoutube}</p>
              )}
            </Card>
          </NavLink>
        );
      })}
    </>
  );
}

const Card = styled.div`
margin-top:20px;
display:flex;
text-align:left;
font-Weight:600
min-heigth:25rem;
border-radius:2rem
overflow:hidden;
border:0px solid;
img{

width:15rem;
height:15rem;
border-radius:3rem;
padding:2rem;
};
h3{
text-decoration:none;
}
button{
width:120px;
height:30px;
}

`;

export default Search;
