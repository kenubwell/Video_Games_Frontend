import React, {useState} from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');


    function handleSubmit(element){
        element.preventDefault()
        console.log(searchTerm)
        props.filterGames(searchTerm)
    }

    return ( 
        <div className="search-contain">
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(element) => setSearchTerm(element.target.value)} type='text' placeholder='Search by Game Name...' className="input-search"></input>
            <button type='submit' className="search-button">Search</button>
            {/* <button onClick={() => props.getAllGames()}>Reset Table</button> */}
            </form>
        </div>
     );
}
 
export default SearchBar;