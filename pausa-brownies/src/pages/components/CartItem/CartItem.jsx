import React from "react";
import { ReactComponent as RealBrownie } from "../../profilea/assets/RealBrownie.svg";
import "./CartItem.css";


const CartItem = ({ price = 0, name = "Brownie", quantity = 0 }) => {
    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    return (

        <div className="cart-item-wrapper centered-content">
            <div className="cart-item centered-content">
                <div className="cart-item-image">
                    <RealBrownie />
                </div>
                <div className="cart-item-info centered-content">
                    <div className="cart-item-name">
                        {name}
                    </div>
                    <div className="cart-item-price">
                        {formattedPrice}
                    </div>
                    <div className="cart-item-quantity">
                        Total: {quantity}
                    </div>
                </div>

            </div>




        </div>

    );
}

export default CartItem;