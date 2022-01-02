import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/CurrencyConverter.css'

export default function CurrencyConverterComponent() {

    const [getAllRates, setAllRates] = useState([])
    const [loadingFlag, setloadingFlag] = useState(false)
    const [getCurrentINR, setCurrentINR] = useState();
    const [getConvertedINR, setConvertedINR] = useState(0);

    useEffect(() => {

        const fetch = async () => {
            const data = await axios.get("https://api.exchangerate-api.com/v4/latest/USD")
                .then(res => {
                    const dataToBeFiltered = res.data.rates;
                    console.log(res.data.rates)
                    setAllRates(JSON.stringify(res.data.rates))
                    setloadingFlag(true)
                    console.log(dataToBeFiltered.INR)
                    setCurrentINR(dataToBeFiltered.INR);
                })
                .catch("Error");
        }
        fetch();

    }, [])

    const calculateINR = (evt) => {
        console.log(evt.target.value)
        setConvertedINR(evt.target.value * getCurrentINR)
    }

    return (
        <div className="container-fluid w-75 resume-block p-4 mb-4 " >
            <div className="card border-0 " >

                <div className="container-fluid " >
                    {/* <div><pre>{JSON.stringify(getAllProducts, null, 2)}</pre></div> */}
                    {
                        //loadingFlag ? getAllRates : "LOADING"
                    }
                    <div className="card text-centertext-white bg-dark mb-3" style={{ max_width: '18rem' }}>
                        <div className="card-header" style={{ color: 'white' }}>INDIAN RUPEES for US Dollar</div>
                        <div className="card-body">
                            <h1 className="card-title">Current Conversion for 1$ is <code>{getCurrentINR}</code></h1>
                            <p className="card-text">Custom Input</p>
                            <div className="card-text">
                                <input type="number" min='0' onChange={calculateINR} className="form-control" />
                                <h4 style={{ font_size: '4rem' }}>The Converted price is <u><b><code>{getConvertedINR}</code></b></u></h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}