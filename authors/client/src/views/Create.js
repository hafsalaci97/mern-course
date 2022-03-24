import Form from "../components/Form";
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () =>{
    //set dynamically the operation in base of the action (create/edit)
    const operation = "Add a new Author:";
    const [serverError, setServerError] = useState({});
    const [clientError, setClientError] = useState("");
    const [form, setForm] = useState({
        authorName: ""
    });
    const navigate = useNavigate();
    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({...form,
            [e.target.name]: e.target.value
        })
        if (e.target.value.length < 3){
            setClientError("Author's name can't be less than 3 characters!");
        }
        else setClientError("");
    } 
    console.log(form);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/authors/new", form)
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
            onChangeHandler={onChangeHandler} 
            form={form} 
            onSubmitHandler={onSubmitHandler} 
            clientError={clientError}
            serverError={serverError}/>
    );
}

export default Create;