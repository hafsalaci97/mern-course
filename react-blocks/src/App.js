import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
const HeaderStyle = {
    width: '80em',
    height: '100px',
    backgroundColor: '#6aa84f',
    marginLeft: '2.5em'
}
const NavigationStyle = {
  width: '10em',
  height: '20em',
  backgroundColor: '#6fa8dc',
  marginTop: '1em'
}
const MainStyle = {
  backgroundColor: '#e06666',
  width: '69em',
  height: '28.5em',
  marginLeft: '1em',
  marginTop: '1em',
  paddingTop: '1.5em'
}
const SubcontentStyle = {
  width: '15em',
  height: '18em',
  backgroundColor: '#ffd966'
}
const AdvertisementStyle = {
    width: '61em',
    height: '8em',
    backgroundColor: '#b4a7d6',
    marginLeft: '4em',
    marginTop: '1em'
}


  return (
    <div className="App">
        <Header style = {HeaderStyle}/>
        <div className="Nav-Main">
          <Navigation style = {NavigationStyle}/>
          <div>
              <Main style = {MainStyle}>
                <div className="SubCon">
                  <SubContents style = {SubcontentStyle}/>
                  <SubContents style = {SubcontentStyle}/>
                  <SubContents style = {SubcontentStyle}/>
                </div>
                <div>
                  <Advertisement style = {AdvertisementStyle}/>
                </div>
              </Main>
          </div>          
        </div>
    </div>
  );
}

export default App;
