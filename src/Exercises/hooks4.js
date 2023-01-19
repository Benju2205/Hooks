import React, {useEffect, useState} from 'react'

function Hooks4() {
    const [text,setText]= useState("Enter text here...")
    
    useEffect(()=>{
        console.log("useEffect is running")
    },[]);
    
    const handleOnChange=(event)=>{
        // console.log("handleOnChange is running");
        setText(event.target.value)
    }
  return (
    <div>
      <textarea onChange={handleOnChange} value={text} name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}

export default Hooks4
