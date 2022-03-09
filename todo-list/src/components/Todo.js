import React, {useState} from "react";

function Todo (props) {
    const [taskValue, setTaskValue] = useState("");
    const divStyle = {
        textDecoration: 'line-through'
    }

    const defStyle = {
        color: 'black'
    }

    //Here I clear the input and I prevent the default behaviour of the browser
    const addTask = (e) =>{
        e.preventDefault();
        props.setTasks([...props.tasks, 
            {
                // id: props.tasks.length,
                value: taskValue,
                completed: false
            }
    ]);
        setTaskValue("");
    }
    
    const deleteTask = (index)=>{
        const filterTasks = props.tasks.filter((task, i) => {
            return i != index;
        });
        props.setTasks(filterTasks);
    }

    const handleCheck = (index) =>{
        const updatedTasks = props.tasks.map((task, i) => {
            if (index === i){
                task.completed = !task.completed;
            }
            return task;
        });
        props.setTasks(updatedTasks);
    }

    //In order to clear the input on button click, I add the value = taskValue so I can reset it to empty in the addTask function
    return (
        <div>
        <form>
            <input type="text" onChange={(e)=>setTaskValue(e.target.value)} value={taskValue}></input>
            <button onClick={addTask}>ADD</button>
        </form>
        <div>
            {
                props.tasks.map((task, i) => (<div style = {task.completed == true ? divStyle : defStyle} key={i}>{task.value}
                                            <input type="checkbox" checked={task.completed} onChange={(e) =>handleCheck(i)}/>
                                            <button onClick={(e) => deleteTask(i)}>DELETE</button></div>)
                
                )
            }
        </div>
        </div>
    );

}
export default Todo;