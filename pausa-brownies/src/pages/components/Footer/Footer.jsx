import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import PausaLogo from "../Logo/Logo";
import FooterItem from "./components/FooterItem";
import "./Footer.css";
import "../Navbar/Navbar.css";
import { ReactComponent as WhatsAppIcon } from "./assets/whatsapp.svg";
import { ReactComponent as TelegramIcon } from "./assets/telegram.svg";
import { ReactComponent as TelephoneIcon } from "./assets/telephone.svg";

const Footer = () => {
    //useMediaQuery for pausa logo short true
    const isMobile = useMediaQuery("(max-width: 960px)");

    return (
        <footer className="nav-bar footer">
            <PausaLogo short={isMobile} />
            <ul className="footer-items">
                <FooterItem
                    href="https://whatsa.me/5521969115004/?t=Ol%C3%A1!%20Gostaria%20de%20comprar%20brownies!"
                    icon={WhatsAppIcon}
                />
                <FooterItem href="https://t.me/pausa109" icon={TelegramIcon} />
                <FooterItem href="tel:+5521969115004" icon={TelephoneIcon} />
            </ul>
        </footer>
    );
};

export default Footer;
