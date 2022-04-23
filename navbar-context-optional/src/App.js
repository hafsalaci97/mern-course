import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Form from './components/Form';
import {UserContext} from './context/UserContext';

function App() {
  const [userName, setUserName] = useState("BOB SMITH");
  //UserContext is the Wrapper in this case
  return (
    <div className="App">
      <UserContext.Provider value={{userName, setUserName}}>
        <Navbar/>
        <FormWrapper>
          <Form/> 
        </FormWrapper>     
      </UserContext.Provider>
    </div>
  );
}

export default App;
