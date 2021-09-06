import React, { useState } from "react";

export default function CounterComponent() {
    const [counter, setCounter] = useState(0);
    var textColor = "blue";

    const handleChange = () => {
        textColor = "red";
    };

    return (
        <div className="container-fluid w-50">
            <h1>Counter Component</h1>
            <label className="form-label mt-2"><strong>Counter</strong></label>
            <br />
            <div className="card" style={{ height: "100px", width: "500px", textAlign: "center", alignItems: "center" }}>
                <div className="card-body" style={{ width: "500px" }} >
                    <div className="card-title" style={{ width: "500px" }} >
                        <span className="form-span mt-2 ms-4" style={{ fontSize: "56px", color: textColor }} onChange={handleChange}><strong>{counter}</strong></span>
                    </div>
                    <div className="card-text" >
                        <button onClick={e => setCounter(0)} className="btn btn-primary ms-2" style={{ width: "48px" }}>0</button>
                        <button onClick={e => setCounter(counter + 1)} className="btn btn-primary ms-2" style={{ width: "48px" }}>+1</button>
                        <button onClick={e => setCounter(counter - 1)} className="btn btn-primary ms-2" style={{ width: "48px" }}>-1</button>
                        <button onClick={e => setCounter(counter + 2)} className="btn btn-primary ms-2" style={{ width: "48px" }}>+2</button>
                        <button onClick={e => setCounter(0)} className="btn btn-secondary ms-2" style={{ width: "80px" }}>Reset</button>
                    </div>
                    {/* <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                </div>
            </div>
        </div>
    )
}