import React, {useState} from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = () =>{

    const [form, setForm] = useState({
        productTitle: "",
        productPrice: "",
        productDescription: ""
    });

    const onChangeHandler =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(form);
        axios.post('http://localhost:8000/api/products/create', form)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }


    return(
        <div className='Html-Style'>
            <h1>Product Manager</h1>
            <div>
                <form onSubmit={onSubmitHandler} className='Form-Style'>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Title:</label>
                        <input className='Input-Style' type="text" name='productTitle' onChange={onChangeHandler}/>
                    </div>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Price:</label>
                        <input className='Input-Style' type="text" name='productPrice' onChange={onChangeHandler}/>
                    </div>
                    <div className='Input-Outline'>
                        <label className='Label-Style'>Description:</label>
                        <input className='Input-Style' type="text" name='productDescription' onChange={onChangeHandler}/>
                    </div>
                    <input className="Btn-Style" type="submit" value="CREATE"/>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;