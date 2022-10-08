import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [ tourplaces, setTourPlaces ] = useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      const SERVER_URL = 'https://tourplaces-json-server.herokuapp.com/tourplaces'
      const res = await fetch(SERVER_URL)
      const data = await res.json()
      setTourPlaces(data)
    }
    fetchPlaces()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card tourplaces={tourplaces}/>
    </div>
  );
}

export default App;
