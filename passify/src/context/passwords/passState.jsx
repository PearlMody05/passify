import React from "react";
import passContext from "./passContext";
import { useState } from "react";

const PassState = (props)=>{
    const host = "http://localhost:5000/api"
    const pass=[];
      const [p ,setPass] = useState(pass);

      //get all saved passwords
      const getPass = async()=>{
        let url = `${host}/passify/fetchAllPasswords`;
        const response = await fetch(url,{
          method: 'GET',
          headers : {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
        });
        const data = await response.json();
        console.log("data is",data);
        setPass(data.passwords);
      
      }
   

      //add passwords
      const AddPass=async (name,password,tag)=>{
        let url = `${host}/passify/createPassword`;
        const response = await fetch(url,{
          method: 'POST',
          headers : {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
          body : JSON.stringify({name,password,tag})
  
        });

        
        let new_pass=await response.json();
        setPass(p.concat(new_pass));

      }
      // delete passwords
      const DeletePass=async (id)=>{
        //api call
        let url = `${host}/passify/deletePassword/${id}`;
        const response = await fetch(url,{
          method: 'DELETE',
          headers : {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
        });
        const data = await response.json();
        console.log(data);
        console.log("Deleting the password with id" + id);
        const allPass = p.filter((new_pass)=>{
          return new_pass._id!==id
       })
       setPass(allPass)

      }

      //edit 
      const EditPass = async(id,name,password,tag)=>{
        //api call
        let url = `${host}/passify/updatePassword/${id}`;
        const response = await fetch(url,{
          method: 'PUT',
          headers : {
            'Content-Type' : 'application/json',
            'auth-token' : localStorage.getItem('token')
          },
          body : JSON.stringify({name,password,tag})

        });
        const json = await response.json();
        let np = JSON.parse(JSON.stringify(p));
        //deleting in client side
        for(let index=0;index<np.length;index++)
        {
          const element = np[index];
          if(element._id === id)
          {
            np[index].name = name;
            np[index].password = password;
            np[index].tag = tag;
            break;
          }
        }
        setPass(np);
      };
    


    return(
        <passContext.Provider value = {{p,setPass,AddPass,DeletePass, EditPass,getPass}}>
            {props.children}
        </passContext.Provider>
    )

}

export default PassState;
