import React, { useState, useContext } from "react";
import "./Menu.css";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json";
import SearchBar from "../components/SearchBar/SearchBar";
import UserContext from "../../context/UserContext";

const Menu = () => {
  const { cart, setCart } = useContext(UserContext);
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

  const addToCart = (item, quantity) => {
    const existingCartItem = cart.find((cartItem) => cartItem.item.id === item.id);
    if (existingCartItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.item.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
      );
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
                button1={"Adicionar ao carrinho"}
                button2={"Ver Detalhes"}
                button2to={`/description/${item.id}`}
                onClick1={() => addToCart(item, 1)}
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
                button2to={`/description/${item.id}`}
                onClick1={() => addToCart(item, 1)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
