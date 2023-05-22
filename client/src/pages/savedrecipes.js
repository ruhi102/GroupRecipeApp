import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./rec.css";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Nav1 from './nav';

function SaveRecipe() {
  const [recipesList, setRecipesList] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/recipes');
      const { data } = response;
      setRecipesList(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="wrapper">
      {recipesList.map((recipe) => (
        <Card
          key={recipe.id}
          img={recipe.image_url}
          title={recipe.title}
          id={recipe.id}
        />
      ))}
    </div>
  );
}

function Card(props) {
  return (
  
    <div className="card" style={{ marginTop: "55px" }}>
      <div>
      <div className="card__body">
        <img src={props.img} alt={props.title} className="card__image" />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <Link to={`/viewsaverecipe/${props.id}`}> 
        <button className="card__btn">View Recipe</button>
      </Link>
      </div>
      
    </div>
  
    
  );
}


export default SaveRecipe;