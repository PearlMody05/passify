import React ,{useEffect} from "react";
import { Link,useLocation } from "react-router-dom";
import '../style.css'
import { useNavigate } from "react-router-dom";

function Navbar(){
  let location = useLocation();
  useEffect(()=>{
    
    console.log(location.pathname);
  },[location]
  );
  let nav = useNavigate();
    const handleLogout =()=>{
      localStorage.removeItem('token');
      nav('/login');
    }

    return(
       
      <nav className="navbar navbar-expand-lg bg-body-tertiary, navigation">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="#">Passify</Link >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link  className={`nav-link {location.path=== "/"? "active": ""}`} aria-current="page" to="/">Home</Link >
            </li>
            <li className="nav-item">
              <Link  className={`nav-link {location.path=== "/"? "active": ""}`} to="/Create">Create</Link >
            </li>
            <li className="nav-item">
              <Link  className={`nav-link ${location.path=== "/"? "active": ""}`} to="/View">View</Link >
            </li>
            <li className="nav-item">
              <Link  className={`nav-link ${location.path=== "/" ? "active": ""}`} to="/About">About Us</Link >
            </li>
          </ul>
       </div>
       {(!localStorage.getItem('token'))?<>
        <Link style={{width:"10%"}} className="btn btn-outline-secondary mx-2" to="/login" role="button">Login</Link>
        <Link type="button" style={{width:"10%"}} className="btn btn-outline-secondary" to="/Signup" role="button">Sign Up</Link></>:<><button type="button" style={{width:"10%"}} className="btn btn-outline-secondary" to="/logout" role="button" onClick={handleLogout}>Logout</button></>}
      </div>:
    </nav>
    
        
    )
}

export default Navbar