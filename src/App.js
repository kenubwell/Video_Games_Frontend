import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DisplayGames from './Components/DisplayGames/DisplayGames';
import ConsoleChart from './Components/ConsoleChart/ConsoleChart';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import GameTable from './Components/GameTable/GameTable';
import BestInvestChart from './Components/BestInvestChart/BestInvestChart';
import SampleEvaluationChart from './Components/SampleEvaluationChart/SampleEvaluationChart';
import PublisherChart from './Components/PublisherChart/PublisherChart';
import Footer from './Components/Footer/Footer';

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
        <div className='left-panel-back'>
        <div><SearchBar filterGames={filterGames}/></div>
        <div><GameTable displayGames={displayGames}/></div>
        </div>
        <div className='right-panel-back'>
          <div className='search-title'><medium className='search-style'>Search Results: Consoles sold <medium className='global-sales-text'>(Global Sales in Millions)</medium></medium></div>
          <div><ConsoleChart displayGames={displayGames}/></div>
        </div>
      </div>
        <div className='best-con-contain'>
          <div className='b-question-wrap'>
            <p className='question-text'>What is the best gaming console to invest in?</p>
            <p className='best-q-answer'>Since <medium className='instyle-blue'>2013</medium>, the data shows global sales (<medium className='instyle-blue'>in millions</medium>) of each gaming platform and the console to invest in is.....</p>
            <img src ="/images/ukrainepointer.png" className='pointer-size'/>
          </div>
          <div className='best-contain-ch'>
            <div><BestInvestChart allGames={allGames}/></div>
          </div>
        </div>
        <div className='twentysixteen-contain'>
          <div className='twensix-contain'>
            <div><SampleEvaluationChart allGames={allGames}/></div>
          </div>
          <div className='e-question-wrap'>
            <p className='e-question-text'>Hmm...<medium className='instyle-blue'>2016</medium>, Cubs Win! (<medium className='instyle-blue'>after 108 years</medium>) but what gaming company was most popular that year?</p>
            <p className='best-eq-answer'>Could it be the prime publisher of sports games, the data says....</p>
            <img src ="/images/ukrainepointerleft.png" className='pointer-size-left'/>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
