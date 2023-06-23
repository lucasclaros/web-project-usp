import React from "react";
import InfoCard from "../InfoCards/InfoCard";
import ProductCard from "../ProductCards/ProductCard";
import "./ProductMainCard.css";
import RealBrownie from "./assets/RealBrownie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductMainCard = ({ button, name, price, keywords, to, onClick }) => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    return (
        <InfoCard
            header={
                <div className="centered-content" style={{ width: "100%" }}>
                    <div style={{ flex: "1" }}>{name}</div>
                    <Link to={to} className="centered-content">
                        <AiOutlineInfoCircle color="black" />
                    </Link>
                </div>
            }
            body={
                <div
                    className="product-wrapper"
                    style={{
                        flexDirection: isMobile ? "column" : "row",
                    }}
                >
                    <div className="product-image centered-content">
                        <img src={RealBrownie} alt="brownie" />
                    </div>
                    <div className="product-card">
                        <ProductCard
                            button={button}
                            name={name}
                            price={price}
                            keywords={keywords}
                            onClick={onClick}
                        />
                    </div>
                </div>
            }
        />
    );
};

export default ProductMainCard;
