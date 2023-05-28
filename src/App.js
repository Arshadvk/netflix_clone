import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import { originals , action, ComedyMovies , HorrorMovies , RomanceMovies } from './urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
     <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
     <RowPost url={RomanceMovies} title='Romance Movies' isSmall />
    </div>
  );
}

export default App;
