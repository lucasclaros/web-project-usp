import React from "react";
import InfoCard from "../../../components/InfoCards/InfoCard";
import PromoCard from "./components/PromoCard";
import { ReactComponent as RegisterIcon } from "./assets/register.svg";
import { ReactComponent as LoginIcon } from "./assets/login.svg";
import { ReactComponent as CardPicker } from "./assets/card-picker.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

const PromoSection = () => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    return (
        <InfoCard
            header={"Quer visualizar nossas promoções?"}
            body={
                <div
                    style={{ flexDirection: isMobile ? "column" : "row" }}
                    className="centered-content"
                >
                    <PromoCard icon={RegisterIcon} to={"/register"} buttonText={"Cadastre-se"} />
                    {!isMobile && <CardPicker className="card-picker" />}
                    <PromoCard icon={LoginIcon} to={"/login"} buttonText={"Faça seu login"} />
                </div>
            }
        />
    );
};

export default PromoSection;
