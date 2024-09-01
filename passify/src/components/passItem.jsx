import React, { useContext, useEffect } from "react";
import '../style.css'

function PassItem(props) {
    const { e } = props;
    return (
        <>
           
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Name : {e.name}</h5>
                            <p className="card-text">Password : {e.password}</p>
                            <p className="card-text">Tag : {e.tag}</p>
                            <p className="card-text">Date : {e.date}</p>
                            <div  className ="shiftIcons" >
                            <i className="fa-solid fa-trash"></i>
                            <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                        </div>
                </div>

            

        </>
    )
}

export default PassItem