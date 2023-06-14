import React from "react";
import "./ProductCard.css";
import PausaButton from "../Buttons/PausaButton/PausaButton";
import { ReactComponent as ShoppingCart } from "./assets/shopping-cart.svg";
import { ReactComponent as AddProduct } from "./assets/plus-sign.svg";
import { ReactComponent as RemoveProduct } from "./assets/minus-sign.svg";
import { ReactComponent as BrownieStack } from "./assets/brownie.svg";

const ProductCard = ({ product, button1, button2 }) => {
    const cartQtt = 0;
    return (
        <div className="product-description product-card">
            <div className="product-info">
                <div className="product-info-container">
                    <div className="product-title shaded-text">Produto:</div>
                    <div className="product-text">{product.name}</div>
                </div>

                <div className="product-info-container">
                    <div className="product-title shaded-text">Valor:</div>
                    <div className="product-text">{product.price}</div>
                </div>

                <div className="product-info-container">
                    <div className="product-title shaded-text">
                        Ingredientes:
                    </div>
                    <div className="product-text">{product.ingredients}</div>
                </div>
            </div>
            <div className="product-management">
                <div className="product-cart">
                    <div className="product-cart-button-wrapper">
                        <div className="product-cart-button">
                            <PausaButton buttonText={button1} />
                        </div>
                    </div>

                    <div className="product-cart-bar">
                        <div className="product-cart-svg">
                            <RemoveProduct />
                            <ShoppingCart />
                            <AddProduct />
                        </div>
                        <div className="cart-quantity-container">
                            <p className="cart-quantity">{cartQtt}</p>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-edit-button-wrapper">
                        <div className="product-edit-button">
                            <PausaButton buttonText={button2} />
                        </div>
                    </div>
                    <div className="product-details-svg">
                        <BrownieStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
