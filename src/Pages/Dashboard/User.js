import React from 'react';
import { useEffect, useState } from "react";
const User = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
          <h1>all user page {user.length}:</h1>
          {
              user.map(c=>{
                  return <h1 className='text-3xl'>{c.email}</h1>
              })
          }  
        </div>
    );
};

export default User;<h1>all user page :</h1>