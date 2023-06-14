import React from "react";
import "./PausaTextField.css";

const PausaTextField = ({
    name,
    value,
    label,
    placeholder,
    inputType,
    handleChange,
    disabled,
}) => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor={label}>{label}</label>
                <input
                    id={label}
                    name={name}
                    value={value}
                    type={inputType}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                    autoComplete="nope"
                    required
                />
            </div>
        </>
    );
};

export default PausaTextField;