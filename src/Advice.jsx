import { useEffect } from "react";
import { useState } from "react";

export default function Advice() {
    const [Advice, setAdvice] = useState("Please Click the Button for Advice");
    const [count, setCount] = useState(0);
    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=> c + 1)    
    }
    useEffect(() => {
      getAdvice();
    }, [ ])
    
  return (
    <div className=" min-vw-100 min-vh-100 text-bg-success d-flex justify-content-center align-items-center">
        <h3>{Advice}</h3>
        <button className=" btn btn-lg btn-outline-primary" type="button" onClick={getAdvice}>Click Me</button>
        <h2>You Get {count} advice</h2>
    </div>
  )
}
