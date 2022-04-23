import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Planets = (props) =>{
    const navigate = useNavigate();
    const [planets, setPlanets] = useState([]);
    const {ID} = useParams();

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+ ID + '/')
        .then(response => {setPlanets(response.data);})
        .catch(()=> navigate("/error"));
    }, [ID]);

    return (
        <div>
            <h1>{planets.name}</h1>
            <h3>Climate: <span style={{fontWeight: "normal"}}>{planets.climate}</span></h3>
            <h3>Terrain: <span style={{fontWeight: "normal"}}>{planets.terrain}</span></h3>
            <h3>Surface Water: <span style={{fontWeight: "normal"}}>{planets.surface_water}</span></h3>
            <h3>Population: <span style={{fontWeight: "normal"}}>{planets.population}</span></h3>
        </div>
    );
}

export default Planets;