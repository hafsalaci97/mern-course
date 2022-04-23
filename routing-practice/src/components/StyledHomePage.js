import {useParams} from "react-router";

const StyledHomePage =()=>{
    const {word} = useParams();
    const {color} = useParams();
    const {bgcolor} = useParams();
    const style = {
        color: color,
        backgroundColor: bgcolor,
        fontSize: '2em'
    }
    const styleDiv = {
        width: "auto",
        height: "4em",
        backgroundColor: bgcolor,
        marginTop: "1em",
        paddingTop: "1em",
        border: "2px solid black"
    }
    return (
        <div style={styleDiv}>
            <label style = {style}>The word is: {word}</label>
        </div>
    );

}

export default StyledHomePage;