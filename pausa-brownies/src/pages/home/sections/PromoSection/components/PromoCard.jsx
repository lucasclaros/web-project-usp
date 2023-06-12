import React from "react";
import "./PromoCard.css";
import PausaButton from "../../../../components/Buttons/PausaButton/PausaButton";

const PromoCard = ({ icon: Icon, buttonText, href }) => {
    return (
        <div className="centered-content promo-card">
            <Icon className="promo-card-icon" />
            <PausaButton href={href} buttonText={buttonText} />
        </div>
    );
};

export default PromoCard;
