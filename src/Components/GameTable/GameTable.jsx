import React, { useState } from 'react';
import './GameTable.css';
import ReactPaginate from 'react-paginate';


const GameTable = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [pageNumber, setPageNumber] = useState(0);
    const gamesPerPage = 5;
    const games = props.displayGames;
    const gamesVisited = pageNumber * gamesPerPage;

    const gamesDisplayed =  games.slice(gamesVisited, gamesVisited + gamesPerPage).map((game, index) => { 
        return (
            <tr key= {index} className = 'search-results-rows'>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.publisher}</td>
                <td>{game.globalSales}</td>
            </tr>
        );
        });

    const pageCount = Math.ceil(games.length / gamesPerPage);
    
    const changePage = ({selected})=>{
        setPageNumber(selected);
    }

    return (  
        <div className = 'search-results-container'>
        <div>
            <h4 className='search-library-title'>Search Results</h4>
        </div>
    
        <table className='table'>
        <thead>
            <tr className = 'search-header-row'>
                <th>Name</th>
                <th>Platform</th>            
                <th>Publisher</th>
                <th>Global Sales</th>
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
                containerClassName={"search-paginationBttns"}
                previousLinkClassName={"search-previousBttn"}
                nextLinkClassName={"search-nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"seaerch-paginationActive"}
                pageClassName={"search-paginationPage"}
                previousClassName={"search-paginationPrevious"}
                nextClassName={"search-paginationNext"}
                />
        </div>
    </div>  
    );
}
 
export default GameTable;