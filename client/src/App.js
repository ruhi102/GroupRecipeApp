import React, { } from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./pages/LandingPage";
import Nav1 from "./pages/nav"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserPage from './pages/User'

import MyRecipes from './pages/myrecipes';
import SavedRecipes from './pages/savedrecipes';
import Logout from './pages/logout';
import Home from './pages/home';
import ViewRecipe from './pages/viewrecipe'
import ViewSavedRecipes from './pages/viewSavedRecipe'
 
function App() {
  return (
    <BrowserRouter>
      <Nav1 /> {/* Render the Nav1 component here */}
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myrecipe" element={<MyRecipes />} />
            <Route path="/saverecipe" element={<SavedRecipes />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<UserPage />} />
        <Route path="/viewrecipe/:id" element={<ViewRecipe />} />
        <Route path="/saverecipe/:id" element={<SavedRecipes />} />
        <Route path="/viewsaverecipe/:id" element={<ViewSavedRecipes />} />
        </Routes>
      </BrowserRouter>
    
  )
  
}

export default App;