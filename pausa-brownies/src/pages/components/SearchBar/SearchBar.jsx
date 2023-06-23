import React from "react";
import lupa from "./assets/lupa.jpg";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, handleSearch, placeholder }) => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-icon">
                <img src={lupa} alt="search-icon" />
            </div>
            <input
                className="search-bar-input"
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleSearch}
                spellCheck="off"
            />
        </div>
    );
};

export default SearchBar;
