import React from "react";
import image from '../images/maxresdefault.jpg';

const Error = () => {

    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img src={image} alt="Obi-Wan Kenobi" />
        </div>
    );
}

export default Error;