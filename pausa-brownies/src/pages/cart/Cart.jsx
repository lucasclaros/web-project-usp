import React, { useContext, useEffect } from "react";
import "./Cart.css";
import CartItem from "../components/CartItem/CartItem";
import InfoCard from "../components/InfoCards/InfoCard";
import UserContext from "../../context/UserContext";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as EmptyCart } from "./assets/empty-cart.svg";
import CartButton from "../components/Buttons/CartButton/CartButton";

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
              {cart.length > 0 ? (
                <>
                  {cart.map((item, index) => (
                    <CartItem
                      key={index}
                      price={item.item.price}
                      name={item.item.name}
                      quantity={item.quantity}
                    />
                  ))}
                  <div className="cart-button-clear">
                    <PausaButton
                      label={"Limpar carrinho"}
                      buttonText={"Limpar carrinho"}
                      onClick={() => {
                        localStorage.removeItem("cart");
                        setCart([]);
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="empty-cart">
                  <EmptyCart />
                  <p className="shaded-text">Seu carrinho está vazio.</p>
                </div>
              )}
            </>
          }
        />
      </div>
      <CartButton cartItemCount={cart.length} />
    </div>
  );
};

export default Cart;
