import { useEffect, useState } from "react"
const useAdmin = user =>{
    const [admin, setAdmin] = useState('');
    useEffect(()=>{
       const email = user?.email;
       const userEmail = {email : email};
       if(email){
           fetch(`http://localhost:5000/admin/${email}`,{
            method: 'GET',
            body: JSON.stringify(userEmail),
            headers: {
                'Content-Type': 'application/json'
            },
           })
           .then(res=>res.json())
           .then(data=>{
               setAdmin(data)
           })
           
       }
    },[user]);

    return [admin]
}

export default useAdmin;



