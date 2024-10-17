import { useState } from "react"

  
export default function Counter(){
    
    return(
        <div>
            <h3>Counter the button click.</h3>
             <MyBtn/>
             <MyBtn/>
        </div>
    )
}
function MyBtn(){
    const [count,setCount]=useState(0);
    function handlerBtn(){
        setCount(count+1)
    }
    return(
        <>
            <button onClick={handlerBtn}>Click Me:{count}</button>
        </>
    )
}