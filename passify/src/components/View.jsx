import React from "react";
import { useContext } from "react";
import passContext from "../context/passwords/passContext";
function View(){
    const p1 = useContext(passContext);
    const {p,setPass} = p1;
    return(
        <>
        
        <h1>View</h1>
        <div>
        {p.map((e)=>{
            return <PassItem/>

        })}
        </div>
        </>
    )
}

export default View