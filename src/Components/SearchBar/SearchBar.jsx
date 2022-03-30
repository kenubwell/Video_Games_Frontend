import React, {useState} from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');


    function handleSubmit(element){
        element.preventDefault()
        props.filterGames(searchTerm)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(element) => setSearchTerm(element.target.value)} type='text' placeholder='Search our gmaes...'></input>
            <button type='submit'>Search!</button>
            <button onClick={() => props.getAllGames()}>Reset Table</button>
            </form>
        </div>
     );
}
 
export default SearchBar;