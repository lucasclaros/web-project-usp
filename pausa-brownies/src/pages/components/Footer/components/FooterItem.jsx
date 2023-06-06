import React from "react";
import "./FooterItem.css";

const FooterItem = ({ href, icon: Icon }) => {
    return (
        <a target="_blank" href={href}>
            <li className="footer-item">
                <Icon />
            </li>
        </a>
    );
};

export default FooterItem;
