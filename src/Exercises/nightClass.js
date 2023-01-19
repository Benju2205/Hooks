import { useState } from "react";

function Nightclass(){
    const[state, setState] = useState({
        same: "Benjamin",
        age: 15,
    });

    const handleChange=()=>{
        const currentState = state;
        setState((prev) => {
            return { ...prev, age: currentState.age + 1};   //spread operator
        });
        
    };

    return(
        <>
        <h1>{JSON.stringify(state)}</h1>
        <h1>{state.name}</h1>
        <h1>{state.age}</h1>
        <button onClick={handleChange} className="btn-lg">Update age by 1</button>
        </>
    )
}

export default Nightclass;