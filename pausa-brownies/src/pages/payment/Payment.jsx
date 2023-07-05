import React, { useState } from "react";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import "./Payment.css";
import { ReactComponent as PaymentCard } from "./assets/card.svg";
import { ReactComponent as PaymentPix } from "./assets/pix.svg";
import { ReactComponent as PaymentMoney } from "./assets/money.svg";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="payment-page-wrapper">
      <InfoCard
        header={"Pagamento"}
        body={
          <div className="payment-page-content">
            <div className="payment-page-info">
              <div
                className={`payment-option ${
                  selectedOption === "card" ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect("card")}
              >
                <PaymentCard />
                <p className="payment-text">Pagamento com Cartão</p>
              </div>
              <div
                className={`payment-option ${
                  selectedOption === "pix" ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect("pix")}
              >
                <PaymentPix />
                <p className="payment-text">Pagamento com Pix</p>
              </div>
              <div
                className={`payment-option ${
                  selectedOption === "money" ? "selected" : ""
                }`}
                onClick={() => handleOptionSelect("money")}
              >
                <PaymentMoney />
                <p className="payment-text">Pagamento com Dinheiro</p>
              </div>
            </div>
            <div className="payment-button-wrapper">
                {selectedOption && (
                    <PausaButton
                    to={`/payment/${selectedOption}`}
                    buttonText={"Continuar"}
                        />
                )}
            </div>
          </div>
          
        }
      />
      
    </div>
  );
};

export default Payment;
