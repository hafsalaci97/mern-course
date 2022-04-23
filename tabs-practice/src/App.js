import Tabs from './components/Tabs';
import './App.css';

function App() {

  const itemsArray = [
    {
      activeID: 1,
      label: 'First Tab.',
      content: 'This is the content for the first tab.'
    },
    {
      activeID: 2,
      label: 'Second Tab.',
      content: 'This is the content for the second tab.'
    },
    {
      activeID: 3,
      label: 'Third Tab.',
      content: 'This is the content for the third tab.'
    }
  ]
  return (
    <div className="App">
      <Tabs content2display = {itemsArray}/>
    </div>
  );
}

export default App;
