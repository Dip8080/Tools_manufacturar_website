import { useEffect, useState } from "react";

const ToolsState = ()=>{
    const [Tools , setTools] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return [Tools , setTools]
}

export default ToolsState