import "./Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Form = (props) =>{

    const navigate = useNavigate();
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <h3><Link to={"/"}>Home</Link></h3>
                <h4>{props.operation}</h4>
                <div className="Input-Div">
                    <p>Name:</p>
                    <input id="input" name="authorName" type="text" onChange={props.onChangeHandler} value={props.value}/>
                        {
                            props.clientError ?
                                <p style={{color: "red"}}>{props.clientError}</p> :
                                ''
                        }
                    <div>
                        <button className="Btn-Form" onClick={()=>navigate("/")}>CANCEL</button>
                        <input className="Btn-Form" type="submit" value="SUBMIT"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;