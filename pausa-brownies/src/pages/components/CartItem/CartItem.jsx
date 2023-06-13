import React from "react";
import { ReactComponent as RealBrownie } from "../../profilea/assets/RealBrownie.svg";
import "./CartItem.css";


const CartItem = ({value = 0 }) => {
    const formattedValue = value.toLocaleString('en-US', {
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
                        <h3>Nome do Produto</h3>
                    </div>
                    <div className="cart-item-price">
                        <h3>{formattedValue}</h3>
                    </div>
                    <div className="cart-item-quantity">
                        <h3>Total: <span>20</span> </h3>
                    </div>
                </div>
   
            </div>
           



        </div>

    );
}

export default CartItem;