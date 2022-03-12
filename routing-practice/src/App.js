import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';
import StyledHomePage from './components/StyledHomePage';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:number" element={<NumberOrWord/>}/>
        <Route path="/:word/:color/:bgcolor" element={<StyledHomePage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
