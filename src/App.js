import logo from './logo.svg';
import './App.css';
import CountryFlags from './Components/CountryFlags'
import UserData from './Components/UserData';

function App() {
  return (
    <div className="App">
     <h2>Display Table Data</h2>
     {/* <CountryFlags></CountryFlags> */}
     <UserData></UserData>
    </div>
  );
}

export default App;
