import React, {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import './Form.css';

function Form () {
    const {setUserName} = useContext(UserContext);

    return (
        <div className="FormStyle">
            <form>
                <label>Your Name: </label>
                <input type="text" onChange = {(e)=>setUserName(e.target.value)}/>
            </form>
        </div>
    );
}

export default Form;