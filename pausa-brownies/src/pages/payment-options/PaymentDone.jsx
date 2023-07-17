import React, { useEffect, useContext } from "react";
import "./css/PaymentDone.css";
import UserContext from "../../context/UserContext";

const PaymentDone = () => {
  const { setCart } = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("cart");
    setCart([]);
  }, [setCart]);

  return (
    <div className="payment-done-wrapper">
      <h2>Compra Confirmada</h2>
      <p>Obrigado pela sua compra!</p>
      <p>Entre em contato conosco para prosseguir com seu pedido!</p>
    </div>
  );
};

export default PaymentDone;
