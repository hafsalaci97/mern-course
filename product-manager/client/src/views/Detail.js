import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+ id)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    },[]);

    return(
        <div>
            <h3>{product.productTitle}</h3>
            <p>{product.productPrice}</p>
            <p>{product.productDescription}</p>
        </div>
    );
}

export default Detail;