import React from 'react';
import { useNavigate } from 'react-router-dom';
import ToolsState from '../../Hooks/ToolsState';
import './Tools.css'

const Tools = () => {
    const [Tools]= ToolsState([]);
    return (

        <div>
            <h1 className='text-center text-2xl my-5'>Tools {Tools.length}</h1>
            <div className='parent'>
                {
                    Tools.map(x=><SingleTools key={x._id} obj={x}></SingleTools>)
                }
            </div>
           

        </div>
    );
};

const SingleTools =(props)=>{
    const nevigate = useNavigate();
    const { name,_id,price,stock,img,minimumOrder,description } = props.obj ;
    const handleNevi = id=>{
        nevigate(`/toolInfo/${id}`);
    }
    return(
        <div>

       <div class="card w-full bg-base-100 shadow-xl">
  <figure class="px-10 pt-10 w-50">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Name: {name}</h2>
    <p>Price : {price}/pcs</p>
    <p>stock : {stock} pcs</p>
    <p>Minimum order : {minimumOrder} pcs</p>
    <p>discription: {description.slice(0,25)}...</p>
    <div class="card-actions">
      <button onClick={()=>handleNevi(_id)} class="btn btn-primary">purchase</button>
    </div>
  </div>
</div>
        
        </div>

    )

}

export default Tools;