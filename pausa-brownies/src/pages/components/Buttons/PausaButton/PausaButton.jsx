import React from "react";
import "./PausaButton.css";

const PausaButton = ({ href, buttonText, onClick }) => {
    return (
        <a href={href} onClick={onClick} className="shaded-text pausa-button">
            <div>{buttonText}</div>
        </a>
    );
};

export default PausaButton;
