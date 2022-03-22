import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () =>{
    const [product, setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+ id)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err => console.log(err))
    },[]);

    const onDeleteHandler = ()=>{
        navigate("/api/products");
        axios.delete('http://localhost:8000/api/products/'+ id)
            .then(res=>{
                console.log(res);
                setProduct(product.filter(product => product._id != id));
            })
            .catch(err=>console.log(err));
    }
    
    return(
        <div>
            <h3>{product.productTitle}</h3>
            <p>{product.productPrice}</p>
            <p>{product.productDescription}</p>
            <button onClick={onDeleteHandler}>DELETE</button>
        </div>
    );
}

export default Detail;