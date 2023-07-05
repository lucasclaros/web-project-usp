import React, { useState, useEffect } from "react";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import "./css/PaymentCard.css";

const PaymentCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    let totalValue = 0;
    if (storedCart) {
      totalValue = storedCart.reduce((acc, item) => acc + item.item.price * item.quantity, 0);
    }
    setTotal(totalValue);
  }, []);

  const handleCardNumberChange = (e) => {

        const sanitizedValue = e.target.value.replace(/\D/g, "");

        let formattedValue = "";
        for (let i = 0; i < sanitizedValue.length; i += 4) {
          formattedValue += sanitizedValue.slice(i, i + 4) + " ";
        }
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    window.location.href = "/payment/confirmation";
  };

  return (
    <div className="payment-card-wrapper">
      <InfoCard
        header="Pagamento com Cartão"
        body={
            
          <div className="payment-card-content">
            <div  className="total-value">Valor Total: R${total.toFixed(2)}</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group form-name">
                <label className="shaded-text" htmlFor="name">Nome: </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                />
                 </div>
              <div className="form-group form-number">
                <label className="shaded-text" htmlFor="cardNumber">Número do Cartão: </label>
                <input
                  type="tel"
                  maxlength="16"
                  pattern="[0-9\s]{13,18}"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </div>
              <div className="form-group form-date">
                <label className="shaded-text" htmlFor="expirationDate">Data de Expiração: </label>
                <input
                  type="month"
                  id="expirationDate"
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                />
              </div>
              <div className="form-group form-cvv">
                <label className="shaded-text" htmlFor="cvv">CVV: </label>
                <input
                  type="tel"
                  maxlength="3"
                  id="cvv"
                  value={cvv}
                  onChange={handleCvvChange}
                />
              </div>
            </form>
            <div className="card-instructions-wrapper">
                <p>
                    Insira os dados do seu cartão de crédito e clique em finalizar compra
                    para prosseguir.
                </p>
            </div>
            <div className="card-button-wrapper">
            <PausaButton
                  type="submit"
                  buttonText="Finalizar Compra"
                  onClick={handleSubmit}
                />
            </div>
            
          </div>
        }
      />
    </div>
  );
};

export default PaymentCard;
