import React from "react";
import {useParams} from "react-router";

const NumberOrWord =(props) =>{
    const {number} = useParams();

    return (
        <div>
            {
                isNaN(number)? (<label>The word is: {number} </label>) : (<label>The number is: {number} </label>)
            }
        </div>
    );
}

export default NumberOrWord;