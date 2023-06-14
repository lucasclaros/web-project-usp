import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PausaButton.css";

const PausaButton = ({ to, buttonText, onClick }) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
      event.preventDefault();
  
      if (onClick) {
        onClick();
      }
  
      if (to) {
        navigate(to);
      }
    };
    return (
        <Link to={to} onClick={handleClick} className="shaded-text pausa-button">
            <div>{buttonText}</div>
        </Link>
    );
};

export default PausaButton;
