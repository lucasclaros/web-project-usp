import React, { useEffect, useState, useContext } from "react";
import "./Menu.css";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json";
import SearchBar from "../components/SearchBar/SearchBar";
import UserContext from "../../context/UserContext";

const Menu = () => {
    const { cart, setCart } = useContext(UserContext);
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

    const addToCart = (item, quantity) => {
        const existingCartItemIndex = cart.findIndex(
            (cartItem) => cartItem.item.id === item.id
        );

        if (existingCartItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingCartItemIndex].quantity += quantity;
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            const updatedCart = [...cart, { item, quantity }];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
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
                                button={"Adicionar ao carrinho"}
                                to={`/description/${item.id}`}
                                onClick={() => addToCart(item, 1)}
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
                                button={"Adicionar ao carrinho"}
                                to={`/description/${item.id}`}
                                onClick={() => addToCart(item, 1)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
