import React, { useEffect, useState } from 'react'

function CountDownComponent() {
    var [minutes, setMinutes] = useState(25)
    var [seconds, setSeconds] = useState(0)
    let myInterval;

    useEffect(() => {

        return () => {
            clearInterval(myInterval);
        };
    });

    const CountDown = () => {
        console.log(seconds)

        const changeTimer = () => {
            myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000)
        }

        return (
            <div className="counter text-center" style={{ marginTop: "5vh" }}>
                <div className="row">
                    <h1>Counter</h1>
                    <code style={{ fontSize: "6rem" }}>
                        {minutes}:{seconds}
                    </code>
                </div>
                <div className="d-row d-flex justify-content-center p-4">
                    <button className="btn btn-success w-25 mt-2 me-4" onClick={myInterval}>Start</button>
                    <button className="btn color-gray w-25 mt-2 btn-outline-dark" onClick={() => { setMinutes(25); setSeconds(0); clearInterval(myInterval); }}>End</button>
                </div>
            </div >
        )
    }



    return (
        <div className="container-fluid " style={{ height: "100vh" }}>
            {
                CountDown()
            }
        </div>
    );
}

export default CountDownComponent;