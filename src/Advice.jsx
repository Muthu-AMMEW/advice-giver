
import { useEffect, useState } from "react";
import './Advice.css';


export default function Advice() {

    const [Advice, setAdvice] = useState("Please Click the Button for Advice");
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    };

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle bg-image">
            <div className="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-5">

                <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 rounded-5">
                    <div className='text-center text-success h2 mt-2'>Advice Giver</div>

                    <h5 className="text-center p-3">{Advice}</h5>
                    <button className=" btn btn-lg btn-primary" type="button" onClick={getAdvice}>Click Me</button>
                    <h6 className="text-center p-3">You have read <span className=" text-bg-info rounded-3">{count}</span> pieces of advice</h6>
                    <a href="https://www.linkedin.com/in/muthu-ammew" className="text-black text-decoration-none mb-2">Designed by <span className="text-success text-decoration-underline fw-bolder">Muthu</span></a>
                </div>
            </div>
        </div>
    )
};
