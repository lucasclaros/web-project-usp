import React from "react";
import lupa from './assets/lupa.jpg';
import "./SearchBar.css";



const SearchBar = ({searchQuery, handleSearch}) => {
    return (
        <div className="search-bar-wrapper centered-content">
            <img className="search-bar-icon" src={lupa} alt="search-icon" />
            <input className="search-bar-input"
                type="text"
                placeholder="Digite sua busca..."
                value={searchQuery}
                onChange={handleSearch}
                enabled
             />
        </div>
    );
}

export default SearchBar;