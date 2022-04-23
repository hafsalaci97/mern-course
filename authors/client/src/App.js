import logo from './logo.svg';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";



function App() {

  return (
    <BrowserRouter>  
      <div className="App">
      <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/new" element={<Create/>}/>
          <Route path="/edit/:id/" element={<Edit/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
