import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import ConsoleChart from './Components/ConsoleChart/ConsoleChart';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';

function App() {

  const [allGames, setAllGames] = useState([]); 
  const [game, setGame] = useState([]);
  const [displayGames, setDisplayGames] = useState([]);

  useEffect(() => { //this is used to render the list of songs on App execution
    getAllGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setAllGames(response.data);
  }

  async function getGameById(game){
    let response = await axios.get(`https://localhost:7260/api/games/${game.id}`)
    setGame(response.data);
    console.log(response.data)
  }

  const filterGames = (searchTerm) => {
    console.log(searchTerm);
    let matchingGames = game.filter((game) => {
      if (game.rank.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.platform.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.year.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.publisher.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
        return true
      }
      else return false
  })
  setGame(matchingGames)
}



  return (
    <div>
      <div><Header/></div>
      <div><DisplayGames displayGames = {allGames}/></div>
      <div>
        <SearchBar filterGames={filterGames} getAllGames={getAllGames}/>
      </div>
      <ConsoleChart singleGame = {game}/>
    </div>
  );
}

export default App;
