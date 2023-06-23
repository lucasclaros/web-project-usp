import React from "react";
import "./ProductCard.css";
import PausaButton from "../Buttons/PausaButton/PausaButton";
import { ReactComponent as ShoppingCart } from "./assets/shopping-cart.svg";
import { ReactComponent as AddProduct } from "./assets/plus-sign.svg";
import { ReactComponent as RemoveProduct } from "./assets/minus-sign.svg";
import { ReactComponent as BrownieStack } from "./assets/brownie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

const ProductCard = ({ button1, button2, name, price, keywords, to }) => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    const formattedPrice = price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
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
                            <RemoveProduct />
                            <ShoppingCart />
                            <AddProduct />
                        </div>
                        <div className="cart-quantity-container">0</div>
                    </div>

                    <div className="product-button">
                        <PausaButton buttonText={button1} to={to} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
