import React, {useState, useEffect} from "react";
import axios from 'axios';

//the url is a prop we get from the homeworld component called in people
const Homeworld =({url})=> {
    const [homeworldName, setHomeworldName] = useState({});
    
    useEffect(()=>{
        axios.get(url)
        .then(response=>{setHomeworldName(response.data)})
        .catch(console.log);
    }, [url]);

    // let str = JSON.stringify(url); 
    // let res = str.substring(31, str.length-2);
    
    
    return (
        <div>
            <h3>Homeworld: {homeworldName.name}</h3>
        </div>
    );
}

export default Homeworld;