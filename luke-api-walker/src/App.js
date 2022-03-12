import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Home/>
      <Routes>
          <Route path="/people/:ID" element={<People/>}/>
          <Route path="/planets/:ID" element={<Planets/>}/>
          <Route path="/error" element={<Error/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
