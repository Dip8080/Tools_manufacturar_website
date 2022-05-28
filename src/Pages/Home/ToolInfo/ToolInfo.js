import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ToolPurchse from '../Home/ToolPurchase/ToolPurchse';

const ToolInfo = () => {
    const { toolid } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `https://aqueous-chamber-57990.herokuapp.com/tools/${toolid}`;
        fetch(url)
            .then(rex => rex.json())
            .then(data => setTool(data))
    }, [])

    return (
        <div className='p-5'>
            <div class="hero min-h-screen bg-base-200 my-2 p-5">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={tool.img} />
                    <div className='mt-3'>
                        <h1 class="text-5xl font-bold">{tool.name}</h1>
                        <p class="py-2">price : {tool.price}</p>
                        <p class="py-2">stock : {tool.stock}</p>
                        <p class="py-2">minimum order : {tool.minimumOrder}</p>
                        <p class="py-2">deicription : {tool.description}</p>
                        <p class="py-2"></p>
                        <button class="btn btn-primary justify-around">Get Started</button>

                        <ToolPurchse key={tool._id} obj={tool}></ToolPurchse>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ToolInfo;