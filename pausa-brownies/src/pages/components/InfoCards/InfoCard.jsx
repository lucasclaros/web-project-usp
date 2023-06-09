import React from "react";
import "./InfoCard.css";

const InfoCard = ({ header, body, styleBody }) => {
    return (
        <section className="centered-content info-section-container">
            <div className="card-wrapper">
                <div className="card-header">{header}</div>
                <div className="card-body" style={styleBody}>
                    {body}
                </div>
            </div>
        </section>
    );
};

export default InfoCard;
