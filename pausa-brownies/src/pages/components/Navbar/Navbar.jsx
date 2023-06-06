import React from "react";
import NavbarItem from "./components/NavbarItem";
import PausaLogo from "../Logo/Logo";
import { ReactComponent as ProfileIcon } from "./assets/woman.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <PausaLogo short={false} />
            <ul className="nav-items">
                <NavbarItem path="/" content="Home" />
                <NavbarItem path="/menu" content="Cardápio" />
                <NavbarItem path="/contact" content="Contato" />
                <NavbarItem path="/about" content="Sobre" />
                <NavbarItem
                    isLogin={true}
                    path="/login"
                    content={
                        <div
                            className="centered-content"
                            style={{ flexDirection: "column", color: "black" }}
                        >
                            <ProfileIcon />
                            Login
                        </div>
                    }
                />
            </ul>
        </nav>
    );
};

export default Navbar;
