import React from "react";
import Navbar from "./navbar";
import '../style.css'
function Home(){
    return(
        <>
        <Navbar/>
        <div className = "container"> 
        <h1><u>PASSIFY</u></h1>
        <p><b>This Website helps you store all your passwords at one place!<br/>So now no need find<br/>the password you forgot to keep in mind<br/>With Passify, your passwords are safe and aligned! </b></p>
        <span id="icons">
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </span>
        </div>
        </>
    )
}

export default Home