import InfoCard from "../components/InfoCards/InfoCard";
import "./css/Contact.css";
import { ReactComponent as WhatsAppIcon } from "./assets/whatsapp.svg";
import { ReactComponent as TelegramIcon } from "./assets/telegram.svg";
import { ReactComponent as TelephoneIcon } from "./assets/telephone.svg";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
    return (
        <InfoCard
            header={"Fale conosco!"}
            body={
                <div className="contact-wrapper">
                    <ContactInfo
                        icon={WhatsAppIcon}
                        contatct="Whatsapp: (21) 96911-5004"
                    />
                    <ContactInfo
                        icon={TelegramIcon}
                        contatct="Telegram: @pausa109"
                    />
                    <ContactInfo
                        icon={TelephoneIcon}
                        contatct="Celular: (21) 96911-5004"
                    />
                </div>
            }
        />
    );
};

export default Contact;
