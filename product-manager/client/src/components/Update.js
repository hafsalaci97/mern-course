import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Update.css';
import { useNavigate } from "react-router-dom";
const Update = () =>{

    const navigate = useNavigate();
    const {id} = useParams();
    const [updateForm, setUpdateForm] = useState({
        productTitle: "",
        productPrice: "",
        productDescription: ""
    });

    const onChangeHandler =(e)=>{
        setUpdateForm({
            ...updateForm,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res =>
                {console.log(res.data);
                    setUpdateForm({
                        productTitle: res.data.productTitle,
                        productPrice: res.data.productPrice,
                        productDescription: res.data.productDescription
                    })})
            .catch(err => console.log(err))
    }, []);

    const updatePerson = (e) =>{
        e.preventDefault();
        console.log(updateForm);
        axios.put('http://localhost:8000/api/products/'+ id, updateForm)
            .then(res=>{
                console.log(res);
            })
            .catch(err=>console.log(err));
        setUpdateForm({
            productTitle: updateForm.productTitle,
            productPrice: updateForm.productPrice,
            productDescription: updateForm.productDescription
        });
        navigate("/api/products");
    }

    return(
        <div className='Html-Style'>
            <h1>Product Manager</h1>
            <div>
                <form className='Form-Style' onSubmit={updatePerson}>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Title:</label>
                        <input className='Input-Style' type="text" name='productTitle' value={updateForm.productTitle} onChange={onChangeHandler}/>
                    </div>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Price:</label>
                        <input className='Input-Style' type="text" name='productPrice' value={updateForm.productPrice} onChange={onChangeHandler}/>
                    </div>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Description:</label>
                        <input className='Input-Style' type="text" name='productDescription' value={updateForm.productDescription} onChange={onChangeHandler}/>
                    </div>
                    <input className="Btn-Style" type="submit" value="EDIT"/>
                </form>
            </div>
        </div>
    );
}

export default Update;