import React, { useState } from "react";

function Hook(){
    
    const[color, setColor] = useState("red");

    return(
        <div>
            Color is {color}
            <button onClick={()=>{setColor(color)}}>Change color</button>
        </div>
    )
}

export default Hook;