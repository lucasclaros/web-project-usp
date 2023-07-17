import React, { useEffect, useState } from "react";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { Link } from "react-router-dom";
import "./css/PaymentMoney.css";

const PaymentMoney = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    let totalValue = 0;
    if (storedCart) {
      totalValue = storedCart.reduce(
        (acc, item) => acc + item.item.price * item.quantity,
        0
      );
    }
    setTotal(totalValue);
  }, []);

  const handleFinalizePurchase = () => {
    // Clear cart and total
    localStorage.removeItem("cart");
    setTotal(0);
  };

  return (
    <div className="payment-money-wrapper">
      <InfoCard
        header="Pagamento com Dinheiro"
        body={
          <div className="payment-money-content">
            <div className="payment-money-text">
              <p>
                Entre em contato para combinar o local e efetuar o pagamento em
                dinheiro. Os contatos se encontram na seção contato ou na barra
                inferior.
              </p>
            </div>
            <div className="payment-money-total">
              <p>Valor Total: R${total.toFixed(2)}</p>
            </div>
            <div className="payment-money-button">
              <PausaButton
                buttonText="Finalizar Compra"
                to="/payment/confirmation"
                onClick={handleFinalizePurchase}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PaymentMoney;
