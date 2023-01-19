import React, {useEffect, useState} from "react";

function Effect(){
    const[name,setName]=useState('asd');

    useEffect(()=>{
        console.log("I am running");
    },[]);

    return (
        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
    );
}
export default Effect;