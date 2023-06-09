import React from "react";
import "./css/Login.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import { ReactComponent as WomanIcon } from "../components/Navbar/assets/woman.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";

const Login = () => {
    return (
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
                            <div style={{ height: "30px" }}></div>
                            <PausaTextField
                                inputType={"password"}
                                label="Senha"
                                placeholder="***********"
                            />
                        </div>
                        <WomanIcon className="icon" />
                    </div>
                    <div className="login-button">
                        <PausaButton buttonText="Entrar" href="/" />
                    </div>
                    <a href="" className="forgot-password">
                        Esqueceu sua senha?
                    </a>
                    <p className="register-message">
                        Não tem cadastro? Faça clicando <a href="">aqui</a>
                    </p>
                </div>
            }
        />
    );
};

export default Login;
