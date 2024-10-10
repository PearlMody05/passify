import React from "react";
import "../style.css";

function About(){
   
    return(
        <>
        
        <h1>About Pearl</h1>
<section className="py-3 py-md-5">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src='https://i.etsystatic.com/15493212/r/il/919eaa/1915996017/il_fullxfull.1915996017_e1y8.jpg' alt="About 1"/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
          <div className="login-message-box">
            <h2 className="mb-3 text-white">Who Is Pearl?</h2>
            <h5 className="login-message">I'm Pearl Mody, a passionate and ambitious computer science student with a drive to innovate and make a lasting impact. I thrive on learning new things, solving complex problems, and bringing creative ideas to life through technology. My long-term vision is to contribute to projects that influence the lives of billions, combining business insight with technical expertise. I believe in the power of collaboration, continuous growth, and striving for excellence in everything I do.
</h5>
<span id="icons">
<a href='https://www.instagram.com/pearlmody05/' target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-instagram" ></i></a>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                   <a href='https://www.linkedin.com/in/pearl-mody-0a0289294/' target="_blank"rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
</span>
</div>
<div>This website is my first full stack project</div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       
        </>
    )
}

export default About