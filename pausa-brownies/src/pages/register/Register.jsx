import React, { useCallback } from "react";
import "./css/Register.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Register = () => {
    const navigate = useNavigate();
    const { formValues, handleInputChange } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            if (Object.values(formValues).includes("")) {
                alert("Preencha todos os campos");
                return;
            }

            if (formValues.password !== formValues.confirmPassword) {
                alert("As senhas não coincidem");
                return;
            }

            localStorage.setItem("user", JSON.stringify(formValues));

            alert("Cadastro realizado com sucesso!");
            // scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/login");
        },
        [formValues, navigate]
    );

    return (
        <div className="register-wrapper">
            <InfoCard
                header="Cadastro"
                body={
                    <div className="register-content">
                        <div className="fields-wrapper">
                            <div className="fields">
                                <PausaTextField
                                    name={"name"}
                                    inputType={"text"}
                                    label="Nome completo"
                                    placeholder="Pausa Brownies"
                                    handleChange={handleInputChange}
                                />
                                <PausaTextField
                                    name={"email"}
                                    inputType={"email"}
                                    label="E-mail"
                                    placeholder="pausa@brownies.com"
                                    handleChange={handleInputChange}
                                />
                                <PausaTextField
                                    name={"phone"}
                                    inputType={"tel"}
                                    label="Telefone"
                                    placeholder="(99) 99999-9999"
                                    handleChange={handleInputChange}
                                />
                                <PausaTextField
                                    name={"address"}
                                    inputType={"text"}
                                    label="Endereço"
                                    placeholder="Rua dos Brownies, 21 - Brownielandia, BR"
                                    handleChange={handleInputChange}
                                />
                                <PausaTextField
                                    name={"password"}
                                    inputType={"password"}
                                    label="Senha"
                                    placeholder="***********"
                                    handleChange={handleInputChange}
                                />
                                <PausaTextField
                                    name={"confirmPassword"}
                                    inputType={"password"}
                                    label="Confirmar senha"
                                    placeholder="***********"
                                    handleChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div className="login-button">
                            <PausaButton
                                onClick={handleSubmit}
                                buttonText="Cadastrar"
                                href=""
                            />
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
