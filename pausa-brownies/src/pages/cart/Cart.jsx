import React, { useContext, useEffect } from "react";
import "./Cart.css";
import CartItem from "../components/CartItem/CartItem";
import InfoCard from "../components/InfoCards/InfoCard";
import UserContext from "../../context/UserContext";

const Cart = () => {
  const { cart, setCart } = useContext(UserContext);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);
  

  return (
    <div className="cart-wrapper">
      <div className="cart-items">
        <InfoCard
          header={"Carrinho"}
          body={
            <>
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  price={item.item.price}
                  name={item.item.name}
                  quantity={item.quantity}
                />
              ))}
            </>
          }
        />
      </div>
    </div>
  );
};

export default Cart;
