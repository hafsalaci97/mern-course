import React, {useState} from 'react';
import Todo from './components/Todo';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <Todo tasks={tasks} setTasks = {setTasks}/>
    </div>
  );
}

export default App;
