import React from "react";
import InfoCard from "../components/InfoCards/InfoCard";
import "./css/About.css";

const About = () => {
    return (
        <InfoCard
            header={"Sobre o Pausa (Brownies)"}
            body={
                <div className="shaded-text about-desc">
                    A necessidade faz o sapo pular e tempos difíceis fazem
                    homens fortes, mas o hábito não faz o monge. Estudante de
                    Ciências de Computação da USP São Carlos, me vi com as
                    contas apertando e com uma receita de família em mãos. Tento
                    manter sempre a qualidade dos produtos pois acredito que é
                    isso que incentiva o consumo. Desejo a todos um bom apetite.
                </div>
            }
        />
    );
};

export default About;
