import { useEffect, useState } from "react"

const useToken= user =>{
    const [token, useToken] = useState('');
    useEffect(()=>{
       const email = user?.user?.email;
       const userEmail = {email : email};
       if(email){
           fetch(`https://aqueous-chamber-57990.herokuapp.com/user/${email}`,{
            method: 'PUT',
            body: JSON.stringify(userEmail),
            headers: {
                'Content-Type': 'application/json'
            },
           })
           .then(res=>res.json())
           .then(data=>{
               console.log(data)
           })
           
       }
    },[user]);

    return [token]
}

export default useToken ;