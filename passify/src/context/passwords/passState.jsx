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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjZDRjODk1ODAxYmZhMDgwZjJlZTg5In0sImlhdCI6MTcyNDczMjAwMX0.fA4-bU9dzbPA0XaPh6g7Amnb3Rr46aCQ8oQd6VMwCzc'
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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjZDRjODk1ODAxYmZhMDgwZjJlZTg5In0sImlhdCI6MTcyNDczMjAwMX0.fA4-bU9dzbPA0XaPh6g7Amnb3Rr46aCQ8oQd6VMwCzc'
          },
          body : JSON.stringify({name,password,tag})
  
        });


        let new_pass={"_id": "66cf6f9b91144da8b98c30d1",
            "user": "66cd4c895801bfa080f2ee89a",
            "name": name,
            "password": password,
            "tag": tag,
            "date": "2024-08-28T18:42:35.918Z",
            "__v": 0

        }
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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjZDRjODk1ODAxYmZhMDgwZjJlZTg5In0sImlhdCI6MTcyNDczMjAwMX0.fA4-bU9dzbPA0XaPh6g7Amnb3Rr46aCQ8oQd6VMwCzc'
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
            'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjZDRjODk1ODAxYmZhMDgwZjJlZTg5In0sImlhdCI6MTcyNDczMjAwMX0.fA4-bU9dzbPA0XaPh6g7Amnb3Rr46aCQ8oQd6VMwCzc'
          },
          body : JSON.stringify({name,password,tag})

        });
        const json = response.json();

        //deleting in client side
        for(let index=0;index<p.length;index++)
        {
          const element = p[index];
          if(element._id === id)
          {
            element.name = name;
            element.password = password;
            element.tag = tag;

          }
        }
      }


    return(
        <passContext.Provider value = {{p,setPass,AddPass,DeletePass, EditPass,getPass}}>
            {props.children}
        </passContext.Provider>
    )

}

export default PassState;
