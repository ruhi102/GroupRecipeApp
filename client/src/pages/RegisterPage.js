import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RegisterPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
            navigate("/login");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };
     
  return (
    <div>
      <div className="auth-form-container">
      <h2><b>Rec🍴pe</b></h2>
      <form className="register-form">
        <label className="form-label" for="form3Example3">Email address</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
        <label className="form-label" for="form3Example4">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
        <button type="button" className="btn btn-primary btn-lg" onClick={() => registerUser()} >Sign Up</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="/login" className="link-danger">Login</a></p>
      </form>
      {/* <p className="link-btn"><a href="/">Go to main page</a></p> */}
    </div>
      
    </div>
  );
}
