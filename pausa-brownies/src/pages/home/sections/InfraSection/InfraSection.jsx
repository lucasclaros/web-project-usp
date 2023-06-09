import React from "react";
import "./css/InfraSection.css";
import InfoCard from "../../../components/InfoCards/InfoCard";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as EqualIcon } from "./assets/equal.svg";
import { ReactComponent as FlourIcon } from "./assets/flour.svg";
import { ReactComponent as DeliverIcon } from "./assets/delivery.svg";
import { ReactComponent as BrowniesIcon } from "./assets/brownies.svg";
import { ReactComponent as GirlIcon } from "./assets/girl1.svg";
import Step from "./components/Step";

const InfraSection = () => {
    return (
        <InfoCard
            header={
                <div className="step-list">
                    <Step number="1" text="Ingredientes de primeira" />
                    <Step number="2" text="Entrega agilizada" />
                    <Step
                        number="3"
                        text="BROWNIES DELICIOSOS!!!"
                        TrailingIcon={GirlIcon}
                    />
                </div>
            }
            body={
                <div className="centered-content ">
                    <FlourIcon className="infra-imgs" />
                    <PlusIcon className="infra-imgs plus" />
                    <DeliverIcon className="infra-imgs" />
                    <EqualIcon className="infra-imgs equal" />
                    <BrowniesIcon className="infra-imgs" />
                </div>
            }
        />
    );
};

export default InfraSection;
