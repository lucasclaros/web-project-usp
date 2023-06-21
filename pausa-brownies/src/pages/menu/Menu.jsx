import React, { useState } from "react";
import "./Menu.css";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json";
import SearchBar from "../components/SearchBar/SearchBar";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = brownieData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.keywords.join(" ").toLowerCase().includes(query) ||
        item.ingredients.join(" ").toLowerCase().includes(query) ||
        item.vaiBemCom.join(" ").toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-search-bar">
        <SearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
          placeholder={"Pesquise por nome, ingredientes, etc."}
        />
      </div>
      {searchResults.length > 0 ? (
        <div className="menu-total-card-wrapper">
          {searchResults.map((item) => (
            <div className="menu-card-wrapper" key={item.id}>
              <ProductMainCard
                name={item.name}
                price={item.price}
                keywords={item.keywords.join(", ")}
                button1={"Adicionar ao carrinho"}
                button2={"Ver Detalhes"}
                to={`/description/${item.id}`}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="menu-total-card-wrapper">
          {brownieData.map((item) => (
            <div className="menu-card-wrapper" key={item.id}>
              <ProductMainCard
                name={item.name}
                price={item.price}
                keywords={item.keywords.join(", ")}
                button1={"Adicionar ao carrinho"}
                button2={"Ver Detalhes"}
                to={`/description/${item.id}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
