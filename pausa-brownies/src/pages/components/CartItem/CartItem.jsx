import React, { useContext, useState } from "react";
import { ReactComponent as RealBrownie } from "../../profilea/assets/RealBrownie.svg";
import "./CartItem.css";
import UserContext from "../../../context/UserContext";

const CartItem = ({ price = 0, name = "Brownie", quantity = 0 }) => {
  const { cart, setCart } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleRemoveItem = () => {
    const updatedCart = cart.filter((item) => item.item.name !== name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`cart-item centered-content ${isHovered ? "hovered" : ""}`}
    >
      <div className="cart-item-image">
        <RealBrownie />
      </div>
      <div className="cart-item-info centered-content">
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">{formattedPrice}</div>
        <div className="cart-item-quantity">Total: {quantity}</div>
      </div>
      <div className="cart-item-remove">
        <button className="cart-item-remove-button" 
        onClick={handleRemoveItem}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
            >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
