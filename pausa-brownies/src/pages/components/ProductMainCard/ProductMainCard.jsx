import React from 'react';
import InfoCard from '../InfoCards/InfoCard';
import ProductCard from '../ProductCards/ProductCard';
import "./ProductMainCard.css";
import { ReactComponent as RealBrownie } from "../../profilea/assets/RealBrownie.svg";
import { useMediaQuery } from "@uidotdev/usehooks";


const ProductMainCard = ({ button1, button2, name, price, keywords, button1to, button2to, onClick1, onClick2}) => {
    const isMobile = useMediaQuery("(max-width: 960px)");
    return (
        <InfoCard
            header={name}
            body={
                <div className="product-management-wrapper centered-content" 
                style={{
                    flexDirection: isMobile
                                            ? "column"
                                            : "row",
                }}>
                        <div className="product-management-image centered-content">
                            <RealBrownie />
                        </div>
                        <div className="product-management-info centered-content">
                            <div className="product-info-edit centered-content">
                                <ProductCard
                                    button1={button1}
                                    button2={button2}
                                    name={name}
                                    price ={price}
                                    keywords ={keywords}
                                    button1to={button1to}
                                    button2to={button2to}
                                    onClick1={onClick1}
                                    onClick2={onClick2}

                                />
                            </div>
                        </div>

                </div>
             }
         />

    );
}

export default ProductMainCard;