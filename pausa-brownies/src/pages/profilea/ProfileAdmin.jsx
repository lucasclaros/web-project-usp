import React from "react";
import "./css/ProfileAdmin.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as ProfileIcon } from "./assets/profilea.svg";


const ProfileAdmin = () => {
    return (
        <div className="profile-admin-wrapper">
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
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="profile-options-wrapper">
                <InfoCard
                    header={"Opções"}
                    body={
                        <div className="admin-options centered-content">
                            <div className="first-row centered-content">
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Gerenciar Usuários"}
                                    />
                                </div>
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Gerenciar Produtos"}
                                    />
                                </div>

                            </div>
                            <div className="second-row centered-content">
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Relatório de Transações"}
                                    />
                                </div>
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Relatório de Estoque"}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default ProfileAdmin;
