import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [order , setOrder] = useState([]);
    const [user]= useAuthState(auth)
    useEffect(()=>{
        if(user){
        fetch(`http://localhost:5000/orders?clintEmail=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
        }
    },[user])
    return (
        <div class="overflow-x-auto my-5">
  <table class="table w-full">
  
    <thead>
      <tr>
        
        <th>Sl no </th>
        <th>name </th>
        <th>address</th>
        <th>phon No</th>
        <th>order</th>
      </tr>
    </thead>
    <tbody>
    
     
    
     {
         order.map((x,index)=> <TableRow key={x._id} obj={x} in={index}></TableRow>)
     }
    </tbody>
  </table>
</div>
    );
};
const TableRow = (props)=>{
    const {clintEmail,clintName,clintPhon,ClintOrder}= props.obj;
    const index = props.in;

return (
    <tr>
        <th>{index+1}</th>
        <th>{clintName}</th>
        <th>{clintEmail} </th>
        <th> {clintPhon}</th>
        <th>{ClintOrder} </th>
    </tr>
)
}

export default MyOrder;