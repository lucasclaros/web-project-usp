import React from "react";
import "./Step.css";

const Step = ({ number, text, TrailingIcon }) => {
    return (
        <div class="centered-content step">
            <div class="centered-content step-number">
                <div class="centered-content rounded-div">{number}</div>
            </div>
            <div class="step-desc">{text}</div>
            {TrailingIcon && <TrailingIcon className="trailing-icon" />}
        </div>
    );
};

export default Step;
