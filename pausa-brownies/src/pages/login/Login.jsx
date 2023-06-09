import React, { useEffect } from "react";
import "./css/Login.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import { ReactComponent as WomanIcon } from "../components/Navbar/assets/woman.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-wrapper">
            <InfoCard
                header="Login"
                body={
                    <div className="login-content">
                        <div className="fields-wrapper">
                            <div className="fields">
                                <PausaTextField
                                    inputType={"email"}
                                    label="E-mail"
                                    placeholder="pausa@brownies.com"
                                />
                                <PausaTextField
                                    inputType={"password"}
                                    label="Senha"
                                    placeholder="***********"
                                />
                            </div>
                            <WomanIcon className="icon" />
                        </div>
                        <div className="login-button">
                            <PausaButton buttonText="Entrar" href="" />
                        </div>
                        <a href="" className="forgot-password">
                            Esqueceu sua senha?
                        </a>
                        <p className="register-message">
                            Não tem cadastro? Faça clicando{" "}
                            <a href="/register">aqui</a>
                        </p>
                    </div>
                }
            />
        </div>
    );
};

export default Login;
