import React from "react";
import passContext from "./passContext";
import { useState } from "react";

const PassState = (props)=>{
const pass = [
          {
            "_id": "66cda991229290cb49561d34",
            "user": "66cd4c895801bfa080f2ee89",
            "name": "gmail password",
            "password": "rgtgxgghgjj",
            "tag": "personal",
            "date": "2024-08-27T10:25:21.528Z",
            "__v": 0
          },
          {
            "_id": "66cda991229290cb49561d34",
            "user": "66cd4c895801bfa080f2ee89",
            "name": "some password",
            "password": "ts100000008202",
            "tag": "personal",
            "date": "2024-08-27T10:25:21.528Z",
            "__v": 0
          },
          {
            "_id": "66cda991229290cb49561d34",
            "user": "66cd4c895801bfa080f2ee89",
            "name": "git password",
            "password": "idkkkk",
            "tag": "None",
            "date": "2024-08-27T10:25:21.528Z",
            "__v": 0
          },
          {
            "_id": "66cf6f9b91144da8b98c30d1",
            "user": "66cd4c895801bfa080f2ee89",
            "name": "pc password",
            "password": "nature",
            "tag": "personal",
            "date": "2024-08-28T18:42:35.918Z",
            "__v": 0
          }
        
]
      const [p ,setPass] = useState(pass);
    
    return(
        <passContext.Provider value = {{p,setPass}}>
            {props.children}
        </passContext.Provider>
    )

}

export default PassState;
