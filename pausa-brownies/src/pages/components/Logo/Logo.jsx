import React from "react";
import { ReactComponent as PausaLogoItem } from "./assets/logo.svg";
import "./Logo.css";

const PausaLogo = ({ short }) => {
  return (
    <div className="logo">
      <PausaLogoItem className="logo-component" />
      {!short && (
        <div className="logo-title shaded-text">
          <h1>Pausa</h1>
          <h1>Brownies</h1>
        </div>
      )}
    </div>
  );
};

export default PausaLogo;
