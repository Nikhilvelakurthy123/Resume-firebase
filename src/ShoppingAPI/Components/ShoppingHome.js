import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ShoppingHome() {

    const [getAllProducts, setAllProducts] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = await axios.get("https://fakestoreapi.com/products")
                .then(res => {
                    console.log(res.data)
                    setAllProducts(res.data)
                })
                .catch("Error");
        }
        fetch();

    }, [])

    return (
        <div className="container-fluid mb-4">
            {/* <div><pre>{JSON.stringify(getAllProducts, null, 2)}</pre></div> */}
            <div className="col-12 ">
                <div className='d-flex flex-row flex-wrap mb-4 p-4' style={{ height: ' inherit ', overflow: 'auto' }}>
                    {
                        getAllProducts.map(data =>
                            <div className="card ms-2 me-2 mt-2" key={data.id} style={{ height: "350px", width: "300px" }}>
                                <img src={data.image} alt="Image not Available" style={{ height: "100px", width: "100px", alignSelf: "center" }} />
                                <p className="card-title ms-1 mt-4" style={{ fontSize: "1.25rem" }}>{data.title.length < 70 ? data.title : (data.title).substring(0, 70).concat(".....")}</p>
                                <p className="card-footer position-absolute bottom-0 " style={{ width: "inherit" }}>
                                    <code className="float-left p-2" >Rating:{data.rating.rate}</code>
                                    <b className="float-right p-0">{data.price}</b>
                                </p>

                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default ShoppingHome;