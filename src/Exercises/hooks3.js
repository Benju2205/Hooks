import React,{useState} from 'react'

function Hooks3() {
    const[data,setData]=useState(0);
    const handleOnClick=()=>{
        setData(data+1);
    }
  return (
    <div>
      <h3>You have clicked the button {data} times.</h3>
      <button onClick={handleOnClick}>Click Me</button>
    </div>
  )
}

export default Hooks3
