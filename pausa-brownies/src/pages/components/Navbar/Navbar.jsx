import React, { useContext, useEffect } from "react";
import NavbarItem from "./components/NavbarItem";
import PausaLogo from "../Logo/Logo";
import { ReactComponent as ProfileIcon } from "./assets/woman.svg";
import "./Navbar.css";
import UserContext from "../../../context/UserContext";

const Navbar = () => {
    const { user } = useContext(UserContext);
    useEffect(() => {}, [user]);

    return (
        <header>
            <nav className="nav-bar">
                <PausaLogo short={false} />
                <ul className="nav-items">
                    <NavbarItem path="/" content="Home" />
                    <NavbarItem path="/menu" content="Cardápio" />
                    <NavbarItem path="/contact" content="Contato" />
                    <NavbarItem path="/about" content="Sobre" />
                    <NavbarItem
                        isLogin={true}
                        path={user ? "/profile" : "/login"}
                        content={
                            <div
                                className="centered-content"
                                style={{
                                    flexDirection: "column",
                                    color: "black",
                                }}
                            >
                                <ProfileIcon />
                                {user ? "Perfil" : "Login"}
                            </div>
                        }
                    />
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
