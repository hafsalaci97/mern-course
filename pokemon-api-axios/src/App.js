import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


//Instead of using promise, we can use await which needs to be inside an async function
// Here I create the async function with the try and catch to manage response and possible errors
async function getPokemon () {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
    return response.data.results;
  }
  catch (e) {
    console.error(e);
  }
}
//Here I render my component
function App() {

  const [pokemons, setPokemons] = useState([]);
  //I call the async function above to get data from the api in an async way and save the state
  useEffect(async () => {
    const listPokemons = await getPokemon();
    setPokemons(listPokemons);
  }, []);
  //Display the saved list of data
  return (
    <div className="App">
      <button className='Btn'>Fetch Pokemon</button>
      <ul className='Poke-List'>
            {pokemons.map((pokemon, index)=> 
              <li key={index}>{pokemon.name}</li>
            )}
      </ul>
    </div>
  );
}

export default App;
