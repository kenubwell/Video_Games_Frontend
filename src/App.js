import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayGames from './Components/DisplayGames/DisplayGames';

function App() {

  const [allGames, setAllGames] = useState([]); 

  useEffect(() => { //this is used to render the list of songs on App execution
    getAllGames();
  }, [])

  async function getAllGames(){
    let response = await axios.get('https://localhost:7260/api/games');
    setAllGames(response.data);
    console.log(response.data)
  }

  async function getGameById(game){
    let response = await axios.get(`https://localhost:7260/api/games/${game.id}`)
    
  }



  return (
    <div>
      <DisplayGames displayGames = {allGames}/>
    </div>
  );
}

export default App;
