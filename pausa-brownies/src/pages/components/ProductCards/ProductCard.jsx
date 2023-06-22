import React from "react";
import "./ProductCard.css";
import PausaButton from "../Buttons/PausaButton/PausaButton";
import { ReactComponent as ShoppingCart } from './assets/shopping-cart.svg';
import { ReactComponent as AddProduct } from './assets/plus-sign.svg';
import { ReactComponent as RemoveProduct } from './assets/minus-sign.svg';
import { ReactComponent as BrownieStack } from './assets/brownie.svg';

const ProductCard = ({ button1, button2, name, price, keywords, button1to, button2to, onClick1, onClick2}) => {
    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });
    return (

        <div className="product-description product-card">
            <div className="product-info">
                <div className="product-info-container">
                    <div className="product-title shaded-text">
                        Produto:
                    </div>
                    <div className="product-text">
                        {name}
                    </div>
                </div>

                <div className="product-info-container">
                    <div className="product-title shaded-text">
                        Valor:
                    </div>
                    <div className="product-text">
                        {formattedPrice}
                    </div>
                </div>

                <div className="product-info-container">
                    <div className="product-title shaded-text">
                        Keywords:
                    </div>
                    <div className="product-text">
                        {keywords}
                    </div>
                </div>
            </div>
            <div className="product-management">
                <div className="product-cart">
                    <div className="product-cart-button-wrapper">
                        <div className="product-cart-button">
                            <PausaButton buttonText={button1} to={button1to} onClick={onClick1} />
                        </div>
                    </div>

                    <div className="product-cart-bar">
                        <div className="product-cart-svg">
                            <RemoveProduct />
                            <ShoppingCart />
                            <AddProduct />
                        </div>
                        <div className="cart-quantity-container">
                            <p className="cart-quantity">0</p>
                        </div>
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-edit-button-wrapper">
                        <div className="product-edit-button">
                            <PausaButton buttonText={button2} to={button2to} onClick={onClick2} />
                        </div>
                    </div>
                    <div className="product-details-svg">
                        <BrownieStack />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProductCard;