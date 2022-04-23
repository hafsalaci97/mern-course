import React, {useState} from 'react';
import './FormColor.css';

function FormColor(props){
    
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    
    const divStyle = {
        backgroundColor: color,
        width: width + 'px',
        height: height + 'px' ,
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: '40px'
    };
    const addBox =(e) =>{
        e.preventDefault(); 
        props.setBoxes ([...props.boxes,       
            {
            //get rid of the error in the console that says that key should be unique
            id: props.boxes.length,
            value: Math.floor(Math.random() * 10) + 1,
            style: divStyle
        }
    ])
    }
    //clear on successful submit
    const createColor = (e) =>{
        const newColor = {color};
        setColor("");
    }
    
    return (
        <div>
            <form onSubmit={createColor}>
                <span>Color</span>
                <input type="text" onChange = {(e)=> setColor(e.target.value)}/>
                <input className='SizeBtn' type="text" placeholder = "Enter Width" onChange = {(e)=> setWidth(e.target.value)}/>
                <input className='SizeBtn' type="text" placeholder = "Enter Height" onChange = {(e)=> setHeight(e.target.value)}/>
                <button className='Main-Btn' onClick={addBox}>Add</button>
                <div className='SubmitBtn'>
                    <input type= "submit" value ="SUBMIT"/>
                </div>
            </form> 
        <div className='BoxPosition'>
            { props.boxes.map(box => (
                <div style = {box.style} key = {box.id}></div>)
                                        )
            }
        </div> 
        </div>
    );

}


export default FormColor;