import React from "react";
import "./css/Profile.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";


const Profile = () => {
    return (
        <div className="profile-wrapper">
            <InfoCard
                header={
                    <div className="profile-header">
                        <h1>Perfil    </h1>
                        <div className="admin-flag" title="Admin">  A  </div>
                    </div>
                }
                body={
                    <div className="profile-content-wrapper centered-content">
                        <div className="profile-content centered-content">
                            <div className="profile-main centered-content">
                                <div className="profile-image">
                                    <ProfileIcon />
                                </div>
                                <div className="profile-info">
                                    <PausaTextField
                                        value={"Pausa Brownies"}
                                        label={"Nome"}
                                    />
                                    <PausaTextField
                                        value={"pausa@brownies.com"}
                                        label={"E-mail"}
                                    />
                                    <PausaTextField
                                        value={"(99) 99999-9999"}
                                        label={"Telefone"}
                                    />
                                </div>
                            </div>
                            <div className="profile-options">
                                <PausaButton
                                    buttonText={"Excluir perfil"}
                                />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Profile;
