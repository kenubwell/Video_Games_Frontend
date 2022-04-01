import React, { useState } from 'react';
import './DisplayGames.css';
import ReactPaginate from 'react-paginate';


const DisplayGames = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const gamesPerPage = 8;
    const games = props.allGames;
    const gamesVisited = pageNumber * gamesPerPage;

    const gamesDisplayed =  games.slice(gamesVisited, gamesVisited + gamesPerPage).map((game, index) => { 
        return (
            <tr key= {index} className = 'display-rows'>
                <td>{game.rank}</td>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.publisher}</td>
            </tr>
        );
        });

    const pageCount = Math.ceil(games.length / gamesPerPage);
    
    const changePage = ({selected})=>{
        setPageNumber(selected);
    }

    return (  
        <div className = 'display-container'>
        <div className='table-title'>
            <div className ='library-contain'>
                <div><h2 className='library-title'>List of Games</h2></div>
            </div>
        </div>
        <table className='game-table table'>
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
            {gamesDisplayed} 
            </tbody>
        </table>
        <div><ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageClassName={"paginationPage"}
                previousClassName={"paginationPrevious"}
                nextClassName={"paginationNext"}
                />
        </div>
    </div>  
    );
}
 
export default DisplayGames;