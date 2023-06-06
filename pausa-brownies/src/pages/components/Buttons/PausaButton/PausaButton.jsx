import React from "react";
import "./PausaButton.css";

const PausaButton = ({ href, buttonText }) => {
    return (
        <a href={href} className="shaded-text pausa-button">
            <div>{buttonText}</div>
        </a>
    );
};

export default PausaButton;
