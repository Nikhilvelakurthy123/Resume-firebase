import React, { useState } from "react";

import '../css/CounterComponent.css'

export default function CounterComponent() {
    const [counter, setCounter] = useState(0);
    const [loadingFlag, setloadingFlag] = useState(true)


    var textColor = "blue";

    const handleChange = () => {
        textColor = "red";
    };



    const loadingComponent = () => {
        return (

            <div className="d-flex justify-content-center">
                <span className="sr-only">Loading...</span>
                <div className="spinner-border" role="status">
                </div>
            </div>
        )
    };

    const loadData = () => {
        return (
            <div className="container-fluid">
                <h1>Counter Component</h1>
                <label className="form-label mt-2"><strong>Counter</strong></label>
                <br />
                <div className="card" style={{ textAlign: "center", alignItems: "center" }}>
                    <div className="card-body" style={{ width: "500px" }} >
                        <div className="card-title" style={{ width: "100%" }} >
                            <span className="form-span mt-2 ms-4" style={{ fontSize: "56px", color: textColor }} onChange={handleChange}><strong>{counter}</strong></span>
                        </div>
                        <div className="card-footer" >
                            <div className="d-flex flex-row flex-grid mb-4 p-4 "  >
                                <button onClick={e => setCounter(0)} className="btn btn-primary ms-2 font-size-1rem" >0</button>
                                <button onClick={e => setCounter(counter + 1)} className="btn btn-primary ms-2 font-size-1rem" >+1</button>
                                <button onClick={e => setCounter(counter - 1)} className="btn btn-primary ms-2 font-size-1rem" >-1</button>
                                <button onClick={e => setCounter(counter + 2)} className="btn btn-primary ms-2 font-size-1rem" >+2</button>
                                <button onClick={e => setCounter(0)} className="btn btn-secondary ms-2 font-size-1rem" >Reset</button>
                            </div>
                        </div>
                        {/* <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid mb-4 w-50" style={{ height: "100vh" }}>
            {/* <div><pre>{JSON.stringify(getAllProducts, null, 2)}</pre></div> */}
            {
                // loadingFlag ? loadingComponent() : 
                loadData()
            }
        </div>
    );
}