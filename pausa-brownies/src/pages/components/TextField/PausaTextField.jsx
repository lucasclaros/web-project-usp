import React from "react";
import "./PausaTextField.css";

const PausaTextField = ({ label, placeholder, inputType }) => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor={label}>{label}</label>
                <input
                    id={label}
                    type={inputType}
                    placeholder={placeholder}
                    required
                />
            </div>
        </>
    );
};

export default PausaTextField;
