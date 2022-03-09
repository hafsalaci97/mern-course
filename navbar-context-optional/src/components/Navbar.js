import React, {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import './Navbar.css';

function Navbar () {
    const {userName} = useContext(UserContext);

    return (
        <div  className="DisplayName">
            <h1>HI {userName}!</h1>
        </div>
    );
}

export default Navbar;