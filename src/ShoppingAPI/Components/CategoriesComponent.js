import axios from "axios";
import { useEffect, useState } from "react";

import '../css/CategoriesComponent.css'

export default function CategoriesComponent() {
    const [categories, setCatagories] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((response) => {
                setCatagories(response.data)
            })
    }, [])

    return (
        <>
            <h4> Select Category</h4>
            <ul className="list-group position-relative w-100">
                <li className="nav-link list-group-item"><button className="btn btn-primary  font-size-1rem" value="All">All</button></li>
                {
                    categories.map((p, index) =>
                        <li key={index} className="nav-link list-group-item"><button className="btn btn-primary font-size-1rem" value={p}>{p.toUpperCase()}</button></li>
                    )
                }
            </ul>

        </>
        // { categories }
    )

}