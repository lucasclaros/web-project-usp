import React, { useContext, useEffect, useState } from "react";
import NavbarItem from "./components/NavbarItem";
import PausaLogo from "../Logo/Logo";
import { ReactComponent as ProfileIcon } from "./assets/woman.svg";
import { ReactComponent as ProfileIcon2 } from "./assets/woman.svg";
import "./Navbar.css";
import UserContext from "../../../context/UserContext";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const { user } = useContext(UserContext);
    useEffect(() => {}, [user]);
    const disableScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    };

    const enableScroll = () => {
        window.onscroll = function () {};
    };

    const toggleNavbar = () => {
        const navItems = document.querySelector(".test-aside");
        navItems.classList.toggle("test-aside-active");
        if (navItems.classList.contains("test-aside-active")) {
            setIsNavbarActive(true);
            disableScroll();
        } else {
            setIsNavbarActive(false);
            enableScroll();
        }
    };

    useEffect(() => {
        setIsNavbarActive(false);
        enableScroll();
    }, []);

    return (
        <header>
            <nav className="nav-bar">
                <PausaLogo short={false} />
                <ul id="nav-items" className="nav-items">
                    <NavbarItem path="/" content="Home" />
                    {/* <NavbarItem path="/menu" content="Cardápio" /> */}
                    <NavbarItem path="/contact" content="Contato" />
                    <NavbarItem path="/about" content="Sobre" />
                    <NavbarItem
                        isLogin={true}
                        path={user ? "/profileu" : "/login"}
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
                {isNavbarActive ? (
                    <IoMdClose
                        className="hamburger-icon"
                        size="45px"
                        color="red"
                        onClick={toggleNavbar}
                    />
                ) : (
                    <AiOutlineMenu
                        className="hamburger-icon"
                        size="40px"
                        onClick={toggleNavbar}
                    />
                )}
            </nav>
            <div id="test" className="test-aside">
                <NavbarItem onClick={toggleNavbar} path="/" content="Home" />
                {/* <NavbarItem
                    onClick={toggleNavbar}
                    path="/menu"
                    content="Cardápio"
                /> */}
                <NavbarItem
                    onClick={toggleNavbar}
                    path="/contact"
                    content="Contato"
                />
                <NavbarItem
                    onClick={toggleNavbar}
                    path="/about"
                    content="Sobre"
                />
                <NavbarItem
                    onClick={toggleNavbar}
                    isLogin={true}
                    path={user ? "/profileu" : "/login"}
                    content={
                        <div
                            className="centered-content"
                            style={{
                                flexDirection: "column",
                                color: "black",
                            }}
                        >
                            {user ? "Perfil" : "Login"}
                        </div>
                    }
                />
            </div>
        </header>
    );
};

export default Navbar;
