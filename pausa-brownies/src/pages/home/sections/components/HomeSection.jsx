import React from "react";
import "./HomeSection.css";

const HomeSection = ({ header, body }) => {
    return (
        <section className="centered-content info-section-container">
            <div className="card-wrapper">
                <div className="card-header">{header}</div>
                <div className="card-body">{body}</div>
            </div>
        </section>
    );
};

export default HomeSection;
