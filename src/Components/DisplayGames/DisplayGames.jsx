import React, { useState } from 'react';
import './DisplayGames.css';


const DisplayGames = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (  
        <div className = 'display-container'>
        <div className='table-title'>
            <div className ='library-contain'>
                <h2 className='library-title'>List of Games</h2>
            </div>
            <div className = 'search-filter'>
                <label className='search-label'>Filter Game List:</label>
                <input type='text' className='custom-input' placeholder="Search...(e.g. Nintendo)" onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
        </div>
        <table className='song-table table'>
        <thead>
            <tr className = 'header-row'>
                <th>Rank</th>
                <th>Name</th>
                <th>Platform</th>            
                <th>Year</th>
                <th>Genre</th>
                <th>Publisher</th>
            </tr>
        </thead>
        <tbody>
            {props.displayGames.filter((game) =>{
                if (searchTerm == ""){
                    return game;
                }
                else if (game.rank.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.platform.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.year.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || game.publisher.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return game;
                }
            })
            .map((game, index) => { 
            return (
                <tr key= {index} className = 'display-rows'>
                    <td>{game.rank}</td>
                    <td>{game.name}</td>
                    <td>{game.platform}</td>
                    <td>{game.year}</td>
                    <td>{game.genre}</td>
                    <td>{game.publisher}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>  
    );
}
 
export default DisplayGames;