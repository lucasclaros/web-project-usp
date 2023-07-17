import React, { useEffect, useState, useContext } from "react";
import "./Menu.css";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json";
import SearchBar from "../components/SearchBar/SearchBar";
import UserContext from "../../context/UserContext";

const Menu = () => {
  const { cart, setCart } = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  useEffect(() => {
    const results = brownieData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery) ||
        item.keywords.join(" ").toLowerCase().includes(searchQuery) ||
        item.ingredients.join(" ").toLowerCase().includes(searchQuery) ||
        item.vaiBemCom.join(" ").toLowerCase().includes(searchQuery)
    );

    setSearchResults(results);
  }, [searchQuery]);

  useEffect(() => {
    const storedData = localStorage.getItem("brownieData");
    if (storedData) {
      const storedBrownies = JSON.parse(storedData);
      const mergedResults = mergeBrownieData(brownieData, storedBrownies);
      setSearchResults(mergedResults);
    } else {
      setSearchResults(brownieData);
    }
  }, []);

  const mergeBrownieData = (data1, data2) => {
    const mergedData = data1.map((item) => {
      const storedItem = data2.find((storedBrownie) => storedBrownie.id === item.id);
      if (storedItem) {
        return { ...item, ...storedItem };
      }
      return item;
    });

    const uniqueIds = new Set([...data1.map((item) => item.id), ...data2.map((item) => item.id)]);
    const deduplicatedData = Array.from(uniqueIds).map((id) => {
      return mergedData.find((item) => item.id === id);
    });

    return deduplicatedData;
  };

  const addToCart = (item, quantity) => {
    const existingCartItemIndex = cart.findIndex((cartItem) => cartItem.item.id === item.id);
    const availableStock = item.stock - (productQuantities[item.id] || 0);
  
    if (availableStock <= 0) {
      alert("No stock available for this item.");
      return;
    }
  
    const updatedCart = [...cart];
  
    if (existingCartItemIndex !== -1) {
      const updatedQuantity = updatedCart[existingCartItemIndex].quantity + quantity;
      if (updatedQuantity > availableStock) {
        alert("Cannot add more items than available stock.");
        return;
      }
  
      updatedCart[existingCartItemIndex].quantity = updatedQuantity;
    } else {
      if (quantity > availableStock) {
        alert("Cannot add more items than available stock.");
        return;
      }
  
      updatedCart.push({ item, quantity });
    }
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  

  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
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
                toInfo={`/description/${item.id}`}
                onClick={() => addToCart(item, productQuantities[item.id] || 1)}
                quantity={productQuantities[item.id] || 1}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(item.id, newQuantity)
                }
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
                toInfo={`/description/${item.id}`}
                onClick={() => addToCart(item, productQuantities[item.id] || 1)}
                quantity={productQuantities[item.id] || 0}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(item.id, newQuantity)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
