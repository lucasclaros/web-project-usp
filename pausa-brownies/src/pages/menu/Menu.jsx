import React, { useState, useEffect } from "react";
import "./Menu.css";
import ProductCard from "../components/ProductCards/ProductCard";
import InfoCard from "../components/InfoCards/InfoCard";
import mockJsonString from "../../mock/brownies.json";
import { useMediaQuery } from "@uidotdev/usehooks";

const Menu = () => {
    const browniesList = JSON.parse(JSON.stringify(mockJsonString));
    const isMobile = useMediaQuery("(max-width: 960px)");

    return (
        <div className="menu-wrapper">
            <div className="search-bar-wrapper">
                <p>aqui seria a search bar</p>
            </div>
            {browniesList.map((brownie, index) => (
                <div className="product-show-wrapper" key={index}>
                    <InfoCard
                        header={brownie.name}
                        body={
                            <div className="product-management-wrapper">
                                <div
                                    className="product-management-content centered-content"
                                    style={{
                                        padding: "20px",
                                        flexDirection: isMobile
                                            ? "column"
                                            : "row",
                                    }}
                                >
                                    <div className="product-management-image centered-content">
                                        <img
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "16px",
                                                border: "2px solid black",
                                                height: "360px",
                                                width: "600px",
                                            }}
                                            src={require(`${brownie.imgPath}`)}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="product-management-info centered-content">
                                        <div className="product-info-edit centered-content">
                                            <ProductCard
                                                product={brownie}
                                                button1={
                                                    "Adicionar ao carrinho"
                                                }
                                                button2={"Ver Informações"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default Menu;
