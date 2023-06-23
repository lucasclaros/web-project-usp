import React, { useEffect, useState } from "react";
import "./Menu.css";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json";
import SearchBar from "../components/SearchBar/SearchBar";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(brownieData);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    };

    useEffect(() => {
        const results = brownieData.filter(
            (item) =>
                item.name.toLowerCase().includes(searchQuery) ||
                item.keywords.join(" ").toLowerCase().includes(searchQuery) ||
                item.ingredients
                    .join(" ")
                    .toLowerCase()
                    .includes(searchQuery) ||
                item.vaiBemCom.join(" ").toLowerCase().includes(searchQuery)
        );
        setSearchResults(results);
    }, [searchQuery]);

    return (
        <div className="menu-wrapper">
            <div className="menu-search-bar">
                <SearchBar
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                    placeholder={"Pesquise por nome, ingredientes, etc."}
                />
            </div>
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
        </div>
    );
};

export default Menu;
