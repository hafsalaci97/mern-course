import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

const ProductList = (props) =>{

    // const {products, setProducts} = props;
    // const {removeFromDom} = props;
    const {id} = useParams();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/getAll')
            .then((res)=>{
                console.log(res.data);
                //I go for res.data.results cause props.setProducts expects an array not an object
                props.setProducts(res.data.results)
            })
            .catch((err)=>console.log(err))
    }, []);

    const deleteProduct = (productId)=>{
        axios.delete('http://localhost:8000/api/products/'+ productId)
            .then(res=>{
                console.log(res);
                // console.log(props.products);
                props.removeFromDom(productId);
            })
            .catch(err=>console.log(err));
    }

    return(
        <div>
            <h1>ALL PRODUCTS</h1>
            {
                props.products.map((product, index) => {
                    return <p key={index}>
                                <Link to={`/api/products/${product._id}`}>{product.productTitle}</Link>&nbsp;
                                | &nbsp;
                                <Link to={`/api/products/edit/${product._id}`}>EDIT</Link> 
                                | &nbsp;
                                <button onClick={()=>{deleteProduct(product._id)}}>DELETE</button>
                            </p>
                })
            }
        </div>
    );

}

export default ProductList;