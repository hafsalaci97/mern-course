import React, {useState} from "react";
import './Tabs.css';
function Tabs (props){
    let tabChosen1 = props.content2display[0].activeID;
    let tabChosen2 = props.content2display[1].activeID;
    let tabChosen3 = props.content2display[2].activeID;
    const [content, setContent] = useState();
    const [activeTab, setActiveTab] = useState();
    const tabActivated = (index) =>{
        setActiveTab(index);
    }

    // function handleOnClick(e){
    //     e.target.style.backgroundColor = 'black';
    //     e.target.style.color = 'white';
    //     e.target.style.border = 'none';
    //     }

    return (

        <div>
            <div>
                <button className={activeTab === 1 ? "Clicked-Btn" : "Btn"} onClick = {()=>{tabActivated(1); setContent(tabChosen1)}} value={content}>TAB 1</button>
                <button className={activeTab === 2 ? "Clicked-Btn" : "Btn"} onClick = {()=>{tabActivated(2); setContent(tabChosen2)}} value={content}>TAB 2</button>
                <button className={activeTab === 3 ? "Clicked-Btn" : "Btn"} onClick = {()=>{tabActivated(3); setContent(tabChosen3)}} value={content}>TAB 3</button>
            </div>
            <div className="Content-Div">
                {
                    content === 1 ?
                    [props.content2display[0].label, " ", props.content2display[0].content] :
                    ''
                }
                {
                    content === 2 ?
                    [props.content2display[1].label, " ", props.content2display[1].content] :
                    ''
                }
                {
                    content === 3 ?
                    [props.content2display[2].label, " ", props.content2display[2].content] :
                    ''
                }
            </div>
        </div>
        
    );
}

export default Tabs;