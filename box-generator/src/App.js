import './App.css';
import FormColor from './components/FormColor';
import React, {useState} from 'react';
function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <FormColor boxes = {boxes} setBoxes = {setBoxes}/>
    </div>
  );
}

export default App;
