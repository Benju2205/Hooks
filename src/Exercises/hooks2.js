import React, { useState } from "react";

function Hook(){
    const [data, setData] = useState(0);

    return(
        <div>
            <h1>This is our current data {data}</h1>
            <button onClick={()=> setData(data+1)}>Update data</button>
        </div>
    )
}

export default Hook;