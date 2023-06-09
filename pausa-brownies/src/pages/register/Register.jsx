import React from "react";
import "./css/Register.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";

const Register = () => {
    return (
        <div className="register-wrapper">
            <InfoCard
                header="Cadastro"
                body={
                    <div className="register-content">
                        <div className="fields-wrapper">
                            <div className="fields">
                                <PausaTextField
                                    inputType={"text"}
                                    label="Nome completo"
                                    placeholder="Pausa Brownies"
                                />
                                <PausaTextField
                                    inputType={"email"}
                                    label="E-mail"
                                    placeholder="pausa@brownies.com"
                                />
                                <PausaTextField
                                    inputType={"tel"}
                                    label="Telefone"
                                    placeholder="(99) 99999-9999"
                                />
                                <PausaTextField
                                    inputType={"text"}
                                    label="Endereço"
                                    placeholder="Rua dos Brownies, 21 - Brownielandia, BR"
                                />
                                <PausaTextField
                                    inputType={"password"}
                                    label="Senha"
                                    placeholder="***********"
                                />
                                <PausaTextField
                                    inputType={"password"}
                                    label="Confirmar senha"
                                    placeholder="***********"
                                />
                            </div>
                        </div>
                        <div className="login-button">
                            <PausaButton buttonText="Entrar" href="" />
                        </div>
                        <p className="register-message">
                            Já tem cadastro? Faça o login{" "}
                            <a href="/login">aqui</a>
                        </p>
                    </div>
                }
            />
        </div>
    );
};

export default Register;
