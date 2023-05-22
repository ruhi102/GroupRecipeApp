import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function ViewRecipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    console.log("recipe: ", id, recipe);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/recipes/${id}`);
      const { data } = response;
        setRecipe(data);
        console.log("response:", response);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  return (
    <div>
      {recipe && (

          <div style={{ marginTop: "55px" }}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image_url} alt={recipe.title} />
          <p>Instructions: {recipe.instructions}</p>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient.trim()}</li>
            ))}
          </ul>
          <p>Summary: {recipe.summary}</p>
        </div>
      
      )}
    </div>
  );
}

export default ViewRecipe;
