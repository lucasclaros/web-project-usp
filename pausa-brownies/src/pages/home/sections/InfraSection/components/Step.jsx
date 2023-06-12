import React from "react";
import "./Step.css";

const Step = ({ number, text, TrailingIcon }) => {
    return (
        <div className="centered-content step">
            <div className="centered-content step-number">
                <div className="centered-content rounded-div">{number}</div>
            </div>
            <div className="step-desc">{text}</div>
            {TrailingIcon && <TrailingIcon className="trailing-icon" />}
        </div>
    );
};

export default Step;
