import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import React from 'react';
import DisplayGames from './Components/DisplayGames/DisplayGames';

function App() {

  const [allGames, setAllGames] = useState([]);  


  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setAllGames(response.data);
  }

  async function getGameById(game){
    let response = await axios.get(`https://localhost:7260/api/games/${game.id}`)
    
  }



  return (
    <div>
      <DisplayGames DisplayGames = {games}/>
    </div>
  );
}

export default App;
