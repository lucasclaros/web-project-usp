import React from "react";
import "./PausaTextField.css";

const PausaTextField = ({ label, placeholder, inputType }) => {
    return (
        <>
            <div className="input-wrapper">
                <label for="input">{label}</label>
                <input
                    id="input"
                    type={inputType}
                    placeholder={placeholder}
                    required
                />
            </div>
        </>
    );
};

export default PausaTextField;
