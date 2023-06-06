import React from "react";
import InfoCard from "../../../components/InfoCards/InfoCard";
import PromoCard from "./components/PromoCard";
import { ReactComponent as RegisterIcon } from "./assets/register.svg";
import { ReactComponent as LoginIcon } from "./assets/login.svg";
import { ReactComponent as CardPicker } from "./assets/card-picker.svg";

const PromoSection = () => {
    return (
        <InfoCard
            header={"Quer visualizar nossas promoções?"}
            body={
                <div className="centered-content">
                    <PromoCard icon={RegisterIcon} buttonText={"Cadastre-se"} />
                    <CardPicker
                        style={{
                            width: "9vw",
                            height: "15vh",
                        }}
                    />
                    <PromoCard icon={LoginIcon} buttonText={"Faça seu login"} />
                </div>
            }
        />
    );
};

export default PromoSection;
