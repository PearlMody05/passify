import React from "react";
import Navbar from "./navbar";
import '../style.css'
function Home(){
    return(
        <>
        <Navbar/>
        <div className = "centre"> 
        <h1><u>PASSIFY</u></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus inventore ipsa qui eius explicabo, sunt laboriosam aut tempore rerum alias quasi, eos labore suscipit vel laborum enim. Ab, voluptatem!</p>
        </div>
        </>
    )
}

export default Home