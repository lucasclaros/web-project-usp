import React from "react";
import "./NavbarItem.css";
import { Link } from "react-router-dom";

const NavbarItem = ({ path, content, isLogin, onClick }) => {
    isLogin = isLogin ?? false;
    const itemClass = isLogin
        ? "navbar-item-login"
        : "navbar-item-normal shaded-text";

    return (
        <Link
            onClick={onClick}
            className={`navbar-item centered-content ${itemClass}`}
            to={path}
        >
            {content}
        </Link>
    );
};

export default NavbarItem;
