import React from "react";
import "./Menu.css";
import ProductCard from "../components/ProductCards/ProductCard";
import InfoCard from "../components/InfoCards/InfoCard";
import { ReactComponent as RealBrownie } from "../profilea/assets/RealBrownie.svg";

const Menu = () => {
    return (
        <div className="menu-wrapper">
            <div className="search-bar-wrapper">
                <p>aqui seria a search bar</p>
            </div>
            <div className="product-show-wrapper">
                <InfoCard
                    header={"Produto X"}
                    body={
                        <div className="product-management-wrapper">
                            <div className="product-management-content centered-content">
                                <div className="product-management-image centered-content">
                                    <RealBrownie />
                                </div>
                                <div className="product-management-info centered-content">
                                    <div className="product-info-edit centered-content">
                                        <ProductCard
                                            button1={"Adicionar ao carrinho"}
                                            button2={"Ver Informações"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />

            </div>
            <div className="product-show-wrapper">
                <InfoCard
                    header={"Produto X"}
                    body={
                        <div className="product-management-wrapper">
                            <div className="product-management-content centered-content">
                                <div className="product-management-image centered-content">
                                    <RealBrownie />
                                </div>
                                <div className="product-management-info centered-content">
                                    <div className="product-info-edit centered-content">
                                        <ProductCard
                                            button1={"Adicionar ao carrinho"}
                                            button2={"Ver Informações"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />

            </div>
        </div>


    );
};

export default Menu;
