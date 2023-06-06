import React from "react";
import "./NavbarItem.css";
import { Link } from "react-router-dom";

const NavbarItem = ({ path, content, isLogin }) => {
    isLogin = isLogin ?? false;
    const itemClass = isLogin
        ? "navbar-item-login"
        : "navbar-item-normal shaded-text";

    return (
        <Link to={path}>
            <div className={`navbar-item centered-content ${itemClass}`}>
                {content}
            </div>
        </Link>
    );
};

export default NavbarItem;
