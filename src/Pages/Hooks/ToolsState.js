import { useEffect, useState } from "react";

const ToolsState = () => {
    const [Tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-chamber-57990.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [Tools, setTools]
}

export default ToolsState