import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    const [form, setForm] = useState({
        option: "people",
        ID: ""
    });

        function onChangeManager (e) {
            setForm({
                ...form,
                //get the option and ID dynamically for both form elements, input and select
                [e.target.name]: e.target.value
            });
        }

        function onFormSubmit (e){
            e.preventDefault();
            navigate("/" + form.option + "/" + form.ID);
        }
    return (
        <form onSubmit={onFormSubmit}>
            <label>Search for: </label>
            <select name="option" value={form.option} onChange={onChangeManager}>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            <label>ID: </label>
            <input type="text" name="ID" value={form.ID} onChange={onChangeManager}/>
            <button>Search</button>
        </form>
    );
}

export default Home;