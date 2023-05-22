import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function ViewRecipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const API_KEY = `https://api.spoonacular.com/recipes/${id}/information?apiKey=9c1c493eb73741d9adf01c61f3d5aa21&instructionsRequired=true`;
      const response = await fetch(API_KEY);
      const data = await response.json();
      console.log(data);
      setRecipe(data);
    };
    getRecipe();
  }, [id]);

  return (
    <div>
      {recipe && (
        <div style={{ marginTop: "55px" }}>

        <h1 >{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} />
          <p>Recipe Summary:</p>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
          <p>Recipe Ingredients:</p>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
          </ul>
          <p>Recipe Instructions:</p>
        <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
        
      
      </div>
      )}
    </div>
  );
}

export default ViewRecipe;

