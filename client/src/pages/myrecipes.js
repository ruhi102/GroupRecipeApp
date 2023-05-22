import React, { useEffect,useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField } from '@mui/material';

export default function Rec() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image_url, setUrl] = useState(null);
  //const [recipesList, setRecipesList] = useState([]);

  const navigate = useNavigate();

  const onSelectFileHandler = (e) => {
    console.log(e.target.files[0]);
  }

  const fetchRecipes = async () => {
    const data = await axios.get('http://127.0.0.1:5000/recipes')
    const {recipes} = data.data
    //setRecipesList(recipes)
    console.log("DATA: ", data)
  }
  const submitRecipe = () => {
    console.log(title, ingredients, instructions,image_url)
    axios.post('http://localhost:5000/recipe', {
      title: title,
      summary: summary,
      instructions: instructions,
      ingredients: ingredients,
      image_url : image_url
    })
    .then(function (response) {
      console.log(response);
      navigate("/saverecipe");
    }) 
  }
  
  function handleFileChange(e) {
    const file = e.target.files[0];
    convertToBase64(file);
  }
  
  function convertToBase64(file) {
    const reader = new FileReader();
  
    reader.onload = () => {
      const base64Data = reader.result;
      const jsonObject = { "base64Data": base64Data }; // Create a JSON object with the base64 data
      console.log(jsonObject);
      // Perform further processing with the jsonObject or set it using setUrl if needed
    };
  
    reader.onerror = error => {
      console.error();
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  

  const onDeleteFileHandler = () => {
    // Implement file deletion logic here
  }
  useEffect(() => {
    fetchRecipes();
  },[])

  return (
    <div className="App">
      <div className="app-form" style={{ display: "flex", flexDirection: "column", alignItems: "center",marginTop: "55px" }}>
        <div style={{ textAlign: "center" }}>
          <label>Title</label>
          <br />
          <TextField style={{ padding: "0.25rem" }}  value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label>Summary</label>
          <br />
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            style={{ padding: "0.25rem", width: '500px', height: '150px', resize: 'vertical' }}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label>Instructions</label>
          <br />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={{ padding: "0.25rem", width: '700px', height: '350px' }}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label>Ingredients</label>
          <br />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            style={{ padding: "0.25rem", width: '600px', height: '250px' }}
          />
        </div>
        <br />
        {
          <div style={{ textAlign: "center" }}>
            <label>Upload Image Url</label>
            <br />
            <TextField style={{ padding: "0.25rem" , width: "500px", height:"200"}} value={image_url} onChange={(e) => setUrl(e.target.value)} />
          </div>
        }
        <br />
        <div style={{ textAlign: "end" }}>
          <Button variant="outlined" style={{ marginLeft: "1rem" }}>
            Cancel
          </Button>
          <Button variant="contained" style={{ marginLeft: "1rem"}} onClick={() => submitRecipe()}>
            Save
          </Button>
        </div>
        </div>
      
      </div>
    );
  }
  
