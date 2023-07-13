import React from "react";
import "./ProductCard.css";
import PausaButton from "../Buttons/PausaButton/PausaButton";
import { ReactComponent as ShoppingCart } from "./assets/shopping-cart.svg";
import { ReactComponent as AddProduct } from "./assets/plus-sign.svg";
import { ReactComponent as RemoveProduct } from "./assets/minus-sign.svg";

const ProductCard = ({ button, name, price, keywords, to, onClick, quantity, onQuantityChange }) => {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const handleAddProduct = () => {
    onQuantityChange(quantity + 1);
  };

  const handleRemoveProduct = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="product-description">
      <div className="product-info">
        <div className="product-info-container">
          <div className="product-title shaded-text">Produto:</div>
          <div className="product-text">{name}</div>
        </div>

        <div className="product-info-container">
          <div className="product-title shaded-text">Valor:</div>
          <div className="product-text">{formattedPrice}</div>
        </div>

        <div className="product-info-container">
          <div className="product-title shaded-text">Keywords:</div>
          <div className="product-text">{keywords}</div>
        </div>
      </div>
      <div className="product-management">
        <div className="product-cart">
          <div className="product-cart-bar centered-content">
            <div className="product-cart-svg">
              <RemoveProduct onClick={handleRemoveProduct} />
              <ShoppingCart />
              <AddProduct onClick={handleAddProduct} />
            </div>
            <div className="cart-quantity-container">{quantity}</div>
          </div>

          <div className="product-button">
            <PausaButton buttonText={button} to={to} onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
