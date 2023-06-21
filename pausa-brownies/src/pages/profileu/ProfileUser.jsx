import React, { useContext, useEffect } from "react";
import "./css/ProfileUser.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import { ReactComponent as ProfileIcon } from "./assets/profileu.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const formatPhoneNumber = (phoneNumber) => {
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  const phoneNumberRegex = /(\d{2})(\d{5})(\d{4})/;
  return digitsOnly.replace(phoneNumberRegex, "($1) $2-$3");
};

const ProfileUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (!localUser) {
      navigate("/login");
    }
  }, []);

  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/login");
  };

  const formattedPhone = user && user.phone ? formatPhoneNumber(user.phone) : "";

  return (
    <div className="profile-wrapper">
      <InfoCard
        header={
          <div className="profile-header">
            Perfil
            <div className="user-flag" title="Admin">
              {" "}
              U{" "}
            </div>
          </div>
        }
        body={
          <div className="profile-content-wrapper centered-content">
            <div className="profile-content centered-content">
              <div className="profile-main">
                <div className="profile-image">
                  <ProfileIcon />
                </div>
                <div className="profile-info">
                  <PausaTextField
                    value={user ? user.name : ""}
                    disabled={true}
                    label={"Nome"}
                  />
                  <PausaTextField
                    value={user ? user.email : ""}
                    disabled={true}
                    label={"E-mail"}
                  />
                  <PausaTextField
                    value={formattedPhone}
                    disabled={true}
                    label={"Telefone"}
                  />
                </div>
              </div>
              <div className="profile-options">
                <PausaButton
                  buttonText={"Excluir perfil"}
                  onClick={handleLogout}
                />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ProfileUser;
