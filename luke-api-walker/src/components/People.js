import {useParams} from "react-router";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Homeworld from "./Homeworld";

const People = (props) => {

    const navigate = useNavigate();
    const [people, setPeople] = useState([]);
    const {ID} = useParams();
    
    useEffect(()=>{ 
        axios.get('https://swapi.dev/api/people/'+ ID + '/')
        .then(response => {setPeople(response.data)})
        .catch(()=> navigate("/error"));
    }, [ID]);

    //we get from people component the url for the homeworld component in order to be processed by the latter
    return (
        <div>
            <h1>{people.name}</h1>
            <Homeworld url = {people.homeworld}/>
            <h3>Height: <span style={{fontWeight: "normal"}}>{people.height}</span></h3>
            <h3>Hair Color: <span style={{fontWeight: "normal"}}>{people.hair_color}</span></h3>
            <h3>Eye Color: <span style={{fontWeight: "normal"}}>{people.eye_color}</span></h3>
            <h3>Skin Color: <span style={{fontWeight: "normal"}}>{people.skin_color}</span></h3>
        </div>
    );
}

export default People;