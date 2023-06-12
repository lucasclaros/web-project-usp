import React from "react";
import "./css/LocationSection.css";
import InfoCard from "../../../components/InfoCards/InfoCard";
import { ReactComponent as Map } from "./assets/map.svg";
import { ReactComponent as Hat } from "./assets/hat.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

const LocationSection = () => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    return (
        <div id="location">
            <InfoCard
                header={"Localização"}
                body={
                    <div
                        style={{ flexDirection: "column" }}
                        className="centered-content"
                    >
                        <div className="centered-content location-content">
                            <Map className="map" />
                            {!isMobile && (
                                <div className="centered-content map-message">
                                    <div className="centered-content shaded-text">
                                        É aqui que fazemos nossa mágica!
                                    </div>
                                    <Hat className="hat" />
                                </div>
                            )}
                        </div>
                        <div className="text-box location-address">
                            Rua Dr Carlos de Camargo Salles, 360 - Jardim
                            Lutfalla, São Carlos / SP
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default LocationSection;
