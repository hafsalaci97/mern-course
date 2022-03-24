import Form from "../components/Form";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () =>{

    const operation = "Edit this Author:";
    const [serverError, setServerError] = useState({});
    const [clientError, setClientError] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    const [updateForm, setUpdateForm] = useState({
        authorName: ""
    });

    const onChangeHandler=(e)=>{
        setUpdateForm({
            ...updateForm,
            [e.target.name]: e.target.value
        })
        if (e.target.value.length < 3){
            setClientError("Author's name can't be less than 3 characters!");
        }
        else setClientError("");
    }
    useEffect(() => {
        axios.get("http://localhost:8000/authors/" + id)
            .then(res =>
                {console.log(res.data.results);
                    setUpdateForm({
                        authorName: res.data.results.authorName
                    })})
            .catch(err => console.log(err))
    }, []);
    console.log(updateForm.authorName);

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/authors/${id}/update`, updateForm)
            .then(res=>console.log(res))
            .catch(err=>{
                console.log(err.response.data);
                setServerError(err.response.data.err.errors);
            });
        if (clientError===""){
            navigate("/")
        }
        else console.log(clientError);
    }

    return(
        <Form operation={operation} 
            onSubmitHandler={onSubmitHandler} 
            onChangeHandler={onChangeHandler} 
            value={updateForm.authorName} 
            clientError={clientError}
            serverError={serverError}/>
    );
}

export default Edit;