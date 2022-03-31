import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import ConsoleChart from './Components/ConsoleChart/ConsoleChart';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import GameTable from './Components/GameTable/GameTable';

function App() {

  const [allGames, setAllGames] = useState([]); 
  const [game, setGame] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);

  useEffect(() => { //this is used to render the list of songs on App execution
    getAllGames();
    getDisplayGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setAllGames(response.data);
  }
  
  async function getDisplayGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setDisplayGames(response.data);
  }

  async function getGameById(game){
    let response = await axios.get(`https://localhost:7260/api/games/${game.id}`)
    setGame(response.data);
    console.log(response.data)
  }

  const filterGames = (searchTerm) => {
    console.log(searchTerm);
    let matchingGames = allGames.filter((game) => {
      if (game.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
      else return false
  })
  setDisplayGames(matchingGames)
}



  return (
    <div>
      <div><Header/></div>
      <div><DisplayGames allGames = {allGames}/></div>
      <div className='home-flex-contain'>
        <div>
        <div><SearchBar filterGames={filterGames}/></div>
        <div><GameTable displayGames={displayGames}/></div>
        </div>
        <div><ConsoleChart displayGames={displayGames}/></div>
      </div>
    
    </div>
  );
}

export default App;
