import React from "react";
import "../style.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

function Login() {
  let nav = useNavigate();
  let [credentials,setCredentials]=useState({email:"",password:""})
  const handleSubmit =async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success)
    {
      localStorage.setItem('token',json.authToken);
      nav('/View');
    }
    else{
      alert("Invalid credentials");
  }
};

const onChange = (e)=>{
  setCredentials({...credentials,[e.target.name]:e.target.value})
}
    

  return (
    <>
   <div className="login-message-box"><h5 className="login-message">Please Login to continue using this website <br/>Don't have an account? <Link to="/Signup">Sign up now!</Link>
</h5></div>
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"><b><h3>Email address</h3></b></label>
          <input
            type="email"
            className="form-control wi"
            id="email"
            name ="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            value = {credentials.email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password"><b><h3>Password</h3></b></label>
          <input
            type="password"
            className="form-control wi"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value = {credentials.password}
          />
        </div>
        
        <button type="submit" className="btn btn-primary my-2" >
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default Login;
