import React, { useEffect, useState } from "react";
import "./css/PaymentPix.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as PixCode } from "./assets/pix-code.svg";

const PaymentPix = () => {
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      const cartTotal = storedCart.reduce(
        (total, item) => total + item.item.price * item.quantity,
        0
      );
      setTotalValue(cartTotal);
    }
  }, []);

  return (
    <div className="pix-wrapper">
      <InfoCard
        header={"Pagamento com Pix"}
        body={
          <div className="pix-content">
            <div className="pix-code-wrapper">
              <PixCode />
            </div>
            <div className="pix-value pix-text-wrapper">Total: R$ {totalValue.toFixed(2)}</div>
            <div className="pix-text-wrapper">
              <p className="pix-text">
                Escaneie o código acima com o seu aplicativo de pagamento preferido e efetue o pagamento.
              </p>
              <br />
              <p className="pix-text">
                Após o pagamento, clique em finalizar compra e envie o comprovante para o nosso WhatsApp ou Telegram.
              </p>
              <br />
              <p className="pix-text">
                O pagamento pode ser feito também diretamente para o CPF: 14222204781
              </p>
            </div>
            <div className="pix-button-wrapper">
              <PausaButton to={"/payment/confirmation"} buttonText={"Finalizar Compra"} />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default PaymentPix;
