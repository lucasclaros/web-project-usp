import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartItem from "../components/CartItem/CartItem";
import InfoCard from "../components/InfoCards/InfoCard";
import UserContext from "../../context/UserContext";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as EmptyCart } from "./assets/empty-cart.svg";
import CartButton from "../components/Buttons/CartButton/CartButton";

const Cart = () => {
  const { cart, setCart, user } = useContext(UserContext);
  const navigate = useNavigate();
  const [totalValue, setTotalValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  useEffect(() => {
    let value = 0;
    let quantity = 0;
    cart.forEach((item) => {
      const price = item.item.price;
      const itemQuantity = item.quantity;
      value += price * itemQuantity;
      quantity += itemQuantity;
    });
    setTotalValue(value);
    setTotalQuantity(quantity);
  }, [cart]);

  const handleCheckout = (event) => {
    event.preventDefault();
    if (user) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/payment");
    } else {
      alert("Você precisa estar logado para finalizar o pedido.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/login");
    }
  };

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-items">
        <InfoCard
          header={"Carrinho"}
          body={
            <div className="cart-card">
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
                  
                  <div className="cart-total-value">
                    <p>Valor Total do Carrinho: R${totalValue.toFixed(2)}</p>
                    <p>Quantidade Total de Itens: {totalQuantity}</p>
                  </div>  
                  
                  <div className="cart-button-checkout">
                    <PausaButton
                      label={"Finalizar pedido"}
                      buttonText={"Finalizar pedido"}
                      onClick={handleCheckout}
                    />
                  </div>
                  <div className="cart-button-clear">
                    <PausaButton
                      label={"Limpar carrinho"}
                      buttonText={"Limpar carrinho"}
                      onClick={handleClearCart}
                    />
                  </div>
                </>
              ) : (
                <div className="empty-cart">
                  <EmptyCart />
                  <p className="shaded-text">Seu carrinho está vazio.</p>
                  <PausaButton
                    label={"Voltar para o cardápio"}
                    buttonText={"Voltar para o cardápio"}
                    to={"/menu/"}
                  />
                </div>
              )}
            </div>
          }
        />
      </div>
      <CartButton cartItemCount={cart.length} />
    </div>
  );
};

export default Cart;
