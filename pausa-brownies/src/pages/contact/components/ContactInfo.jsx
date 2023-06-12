import React from "react";
import "./ContactInfo.css";

const ContactInfo = ({ icon: Icon, contatct }) => {
    return (
        <div className="contact-information">
            <Icon className="media-type" />
            <div className="media-text">{contatct}</div>
        </div>
    );
};

export default ContactInfo;
