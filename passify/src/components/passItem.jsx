import React, { useContext, useEffect } from "react";
import '../style.css'
import passContext from "../context/passwords/passContext";

function PassItem(props) {
    const context = useContext(passContext);
   const{DeletePass} = context;
    const { e,updatePass } = props; // e stands for a password element
    return (
        <>
           
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name : {e.name}</h5>
                            <p className="card-text">Password : {e.password}</p>
                            <p className="card-text">Tag : {e.tag}</p>
                            <p className="card-text">Date : {e.date}</p>
                            <div  className ="shiftIcons" >
                            <i className="fa-solid fa-trash" onClick={()=>{DeletePass(e._id)}}></i>
                            <i className="fa-solid fa-pen-to-square" onClick={()=>{updatePass(e)}}></i>
                            </div>
                        </div>
                </div>

            

        </>
    )
}

export default PassItem