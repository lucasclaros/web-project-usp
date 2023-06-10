import React from "react";
import InfoCard from "../../../components/InfoCards/InfoCard";
import "./css/FeedbackSection.css";
import michaleImg from "./assets/michael.png";
import feedback1 from "./assets/feedback1.png";
import feedback2 from "./assets/feedback2.png";
import { useMediaQuery } from "@uidotdev/usehooks";

const FeedbackSection = () => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    return (
        <InfoCard
            header={"Relato dos nossos clientes"}
            body={
                <div className="feedbacks">
                    <div className="feedback-imgs">
                        {!isMobile && (
                            <img className="michael-img" src={michaleImg} />
                        )}
                        <div className="customers-prints">
                            <img src={feedback1} />
                            <img src={feedback2} />
                        </div>
                    </div>
                    <div className="centered-content text-box customers-message">
                        Vocês são os protagonistas do nosso sucesso!
                    </div>
                </div>
            }
        />
    );
};

export default FeedbackSection;
