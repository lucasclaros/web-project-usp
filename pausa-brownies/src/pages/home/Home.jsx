import React from "react";
import "./css/Home.css";
import PromoSection from "./sections/PromoSection/PromoSection";

const Home = () => {
    return (
        <>
            <section id="presentation">
                <div className="centered-content presentation-title">
                    <h1 className="shaded-text">
                        EXPERIMENTE O SABOR QUE IRÁ MUDAR SUA VIDA
                    </h1>
                </div>
            </section>
            {/* <InfraSection /> */}
            <PromoSection />
        </>
    );
};

export default Home;
