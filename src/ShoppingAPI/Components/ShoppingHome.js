import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../css/ShoppingHome.css'
import CategoriesComponent from './CategoriesComponent'

function ShoppingHome() {

    const [getAllProducts, setAllProducts] = useState([])
    const [individualCategoryProducts, setindividualCategoryProducts] = useState([])
    const [loadingFlag, setloadingFlag] = useState(true)

    useEffect(() => {

        const fetch = async () => {
            const data = await axios.get("https://fakestoreapi.com/products")
                .then(res => {
                    console.log(res.data)
                    setAllProducts(res.data)
                    setindividualCategoryProducts(res.data)
                    setloadingFlag(false)
                })
                .catch("Error");
        }
        fetch();

    }, [])

    const getCategory = (e) => {
        const category = e.target.value;
        console.log(e.target.value);
        console.log("hai")

        if (category === "All") {
            setindividualCategoryProducts(getAllProducts)
        }
        else {
            const fetch = async () => {
                const data = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
                    .then(res => {
                        console.log(res.data)
                        setindividualCategoryProducts(res.data)
                        setloadingFlag(false)
                    })
                    .catch("Error");
            }
            fetch();
        }

        console.table(individualCategoryProducts)
    };

    const catageories = () => {
        // const fetchCategories = async () => {
        //     const data = await `<CategoriesComponent />`
        // }
        return <CategoriesComponent />;
    }

    const loadData = () => {
        return (
            <div className="row mt-4 border-1" >
                <div className="col-2" >
                    <p onClick={getCategory}><CategoriesComponent /></p>
                </div>
                {/* <div className="d-flex flex-row flex-wrap mb-4 p-4"> */}
                <div className="col-9">
                    <div className='d-flex flex-row flex-wrap mb-4 '>
                        {
                            individualCategoryProducts.map(data =>
                                <div className="card ms-2 me-2 mt-2 rounded" key={data.id} style={{ height: "350px", width: "300px" }}>
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
                {/* </div> */}
            </div>

        )
    }

    const loadingComponent = () => {
        return (

            <div className="d-flex justify-content-center loadingComponent" >
                <span className="sr-only text-white">Loading...</span>
                <div className="spinner-border text-white" role="status" >
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid " >
            {/* <div><pre>{JSON.stringify(getAllProducts, null, 2)}</pre></div> */}
            {
                loadingFlag ? loadingComponent() : loadData()
            }
        </div>
    );
}

export default ShoppingHome;