import React, { useEffect, useState } from "react";
//import Nav1 from './Nav';
 
import {Link} from 'react-router-dom';
 


export default function LandingPage() {
    const API_KEY = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7d1b48a04102400fa28627737fbbc5e8&query=italian&number=19';

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async() => {
        const response = await fetch(API_KEY);
        const data = await response.json();
        console.log(data);
    }

    function Card(props) {
        return (
            <div className="card">
                <div className="card__body">
                    <img src={props.img} alt="Food" class="card__image" />
                    <h2 className="card__title">{props.title}</h2>
                    <p className="card__description">{props.description}</p>
                </div>
                <button className="card__btn">View Recipe</button>
            </div>
        );
    }
    return (
        <div>

            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <h1>Welcome to this React Application</h1>
                        <p> Here we will display recipes and browse recipes </p>
                        <form className="search-form">
                            <input className="search-bar" type="text" />
                            <button className="search-button" type="submit"> Search </button>
                        </form>
                        <p><Link to="/login" className="btn btn-success">Login</Link> | <Link to="/register" className="btn btn-success">register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
  );
}