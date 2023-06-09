import React from "react";

const FooterItem = ({ href, icon: Icon }) => {
    return (
        <a target="_blank" href={href}>
            <li>
                <Icon />
            </li>
        </a>
    );
};

export default FooterItem;
