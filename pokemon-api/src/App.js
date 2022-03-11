import './App.css';
import React, {useState, useEffect} from 'react';

function App () {

  const [pokemons, setPokemons] = useState([]);
  
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then (response => response.json())
    .then (response => setPokemons(response.results))
  }, []);


  return (
    <div>
      <button className='Btn'>Fetch Pokemon</button>
      <ul className='Poke-List'>
        {pokemons.length > 0 && pokemons.map((pokemon, index)=>{ 
          return (<li key={index}>{pokemon.name}</li>)})}
      </ul>
    </div>
  );
}

export default App;



