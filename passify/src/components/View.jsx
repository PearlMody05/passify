import React from "react";
import { useContext } from "react";
import passContext from "../context/passwords/passContext";
import PassItem from "./passItem";
import '../style.css'
function View(){
    const context = useContext(passContext);
    const {p,setPass} = context;
    return(
        <>
        <div id="allPasswords" >
            {p.map((e)=>{
                return <PassItem key = {e.id} e={e}/>
            })}
        </div>
        </>
    )
}

export default View