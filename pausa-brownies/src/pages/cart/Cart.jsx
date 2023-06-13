import React from "react";
import "./Cart.css";
import CartItem from "../components/CartItem/CartItem";
import InfoCard from "../components/InfoCards/InfoCard";


const Cart = () => {
    return (
        <div className="cart-wrapper">
            <div className="cart-items">
                <InfoCard
                    header={"Carrinho"}
                    body={
                        <CartItem
                            price={12}
                            name={"Produto X"}
                            quantity={1}
                        />
                    }
                />
            </div>
            div.
        </div>


    );
}

export default Cart;