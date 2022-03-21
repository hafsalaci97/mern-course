// import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/api/products" element={<Main/>} />
          <Route path="/api/products/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
