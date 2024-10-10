import React, { useState,useRef,useEffect } from "react";
import "../style.css"
import { useContext } from "react";
import passContext from "../context/passwords/passContext";
import { useNavigate } from "react-router-dom";
function Create() {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login'); // Redirect to login if no token
        }
    }, [navigate]); // Run the check once when the component mounts

    const context = useContext(passContext);
    const {AddPass}=context;
    const clearRef = useRef(null);
    const [p,setPass]= useState({name:"",password :"",tag: ""})
    const handleClick =(e)=>{
        e.preventDefault();
        AddPass(p.name,p.password,p.tag);
        clearRef.current.click();

    }   
    const onChange=(event)=>{
        setPass({...p,[event.target.name]:event.target.value})

    }
    
    return (
        <>
            <div className="createform centre">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="htmlForm-label"><b>Name</b></label>
                        <input type="text" className="form-control" name="name" aria-describedby="emailHelp"onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <input  type="password" className="form-control" name="password"onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label"><b>Tags(optional)</b></label>
                        <input type="text" className="form-control" name="tag" aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="btns">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>SUBMIT</button>
                    <button className="btn btn-primary " ref={clearRef}>CLEAR</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create