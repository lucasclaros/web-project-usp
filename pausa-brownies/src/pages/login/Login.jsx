/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useContext } from "react";
import "./css/Login.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import { ReactComponent as WomanIcon } from "../components/Navbar/assets/woman.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";
import usersData from "../../mock/usersData.json";

const Login = () => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { formValues, handleInputChange } = useForm({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    if (Object.values(formValues).includes("")) {
      alert("Preencha todos os campos");
      return;
    }
  
    try {
      const response = await axios.post('/login', formValues);
      const { message, user } = response.data;
      if (message === 'Login successful') {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate('/');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.log(error);
      alert('Ocorreu um erro ao fazer o login');
    }
  };
  

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
                  name={"email"}
                  placeholder="pausa@brownies.com"
                  handleChange={handleInputChange}
                />
                <PausaTextField
                  inputType={"password"}
                  label="Senha"
                  name={"password"}
                  placeholder="***********"
                  handleChange={handleInputChange}
                />
              </div>
              <WomanIcon className="icon" />
            </div>
            <div className="login-button">
              <PausaButton buttonText="Entrar" onClick={handleLogin} />
            </div>
            <a className="forgot-password">Esqueceu sua senha?</a>
            <p className="register-message">
              Não tem cadastro? Faça clicando <a href="/register">aqui</a>
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Login;
