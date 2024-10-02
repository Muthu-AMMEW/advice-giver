
import { useEffect, useState} from "react";

export default function Advice() {

    const [Advice, setAdvice] = useState("Please Click the Button for Advice");
    const [count, setCount] = useState(-1);

    async function getAdvices() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    };

    useEffect(() => {
        getAdvices();
    }, []);

    return (
        <div className="min-vw-100 min-vh-100 text-bg-success d-flex flex-column justify-content-center align-items-center">
            <h2>{Advice}</h2>
            <button className=" btn btn-lg btn-primary m-4" type="button" onClick={getAdvices}>Click Me</button>
            <h3>You have read <span className=" text-bg-info rounded-3">{count}</span> pieces of advice</h3>
        </div>
    )
};
