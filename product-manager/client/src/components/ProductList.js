import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const ProductList = (props) =>{

    // const {products, setProducts} = props;
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/getAll')
            .then((res)=>{
                console.log(res.data);
                //I go for res.data.results cause props.setProducts expects an array not an object
                props.setProducts(res.data.results)
            })
            .catch((err)=>console.log(err))
    }, []);

    return(
        <div>
            <h1>ALL PRODUCTS</h1>
            {
                props.products.map((product, index) => {
                    return <p key={index}><Link to={`/api/products/${product._id}`}>{product.productTitle}</Link></p>
                })
            }
        </div>
    );

}

export default ProductList;