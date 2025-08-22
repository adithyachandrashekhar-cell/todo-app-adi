import React,{useState} from 'react';

function MyComponent(){

    const[name,setName] = useState("gay fellow")
    return(
    <div>
        <p>Name : {name}</p>
        
        <button onClick={() => setName("pullarao")}> Chi </button>
        </div>
        );
        
}
export default MyComponent 