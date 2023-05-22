import React, { useEffect, useState } from "react";
import "./rec.css";
import { Link } from 'react-router-dom';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const API_KEY =
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=7d1b48a04102400fa28627737fbbc5e8&query=vegetarian&number=19&instructionsRequired=true";
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setRecipes(data.results);
    };
    getRecipes();
  }, []);

  return (
    <div className="wrapper">
      {recipes && recipes.map((recipe) => (
        <Card
          key={recipe.id}
          img={recipe.image}
          title={recipe.title}
          id={recipe.id}
        />
      ))}
    </div>
  );
}

function Card(props) {
  console.log("prrops:" ,props)
  return (
    
    <div className="card" style={{marginTop: "55px" }}>
      <div>
      <div className="card__body">
        <img src={props.img} alt={props.title} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <Link to={`/viewrecipe/${props.id}`}> 
      <button className="card__btn">View Recipe</button>
    </Link>
      </div>
      
    </div>
  );
}

export default App;
