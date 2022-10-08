import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [ tourplaces, setTourPlaces ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true)
      const SERVER_URL = 'https://tourplaces-json-server.herokuapp.com/tourplaces'
      const res = await fetch(SERVER_URL)
      const data = await res.json()
      setTourPlaces(data)
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
    fetchPlaces()
  },[setTourPlaces])

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {loading ? <Loading/> : <Card tourplaces={tourplaces}/>}
    </div>
  );
}

export default App;
