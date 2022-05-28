import React from 'react';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
const User = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('https://aqueous-chamber-57990.herokuapp.com/user')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
   
    return (
        <div>
            <table class="table w-full">
  
  <thead>
    <tr>
      
      <th>Sl no </th>
      <th>email </th>
      <th>delete </th>
     
    </tr>
  </thead>
  <tbody>
  {
              user.map((x,index)=><SingleAdmin in={index} key={x.email} obj={x}></SingleAdmin>)
          } 
  </tbody>
  </table>
          
        </div>
    );
};
const SingleAdmin = props =>{
    const {email,role} = props.obj;
    const index = props.in;
    const hadleamin =()=>{
        fetch(`https://aqueous-chamber-57990.herokuapp.com/user/admin/${email}`,{
            method : 'PUT',

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('made an admi successfully')
        })
    }
    return (
        <tr>
            <th>{index+1}</th>   
            <th>{email}</th>   
            <th>{role !== 'admin' && <button onClick={hadleamin} className='btn btn-info'>make admin</button>}</th>   
         </tr>

    )
}

export default User;<h1>all user page :</h1>