import React from 'react';
import InfoCard from '../InfoCards/InfoCard';
import ProductCard from '../ProductCards/ProductCard';
import { ReactComponent as RealBrownie } from "../../profilea/assets/RealBrownie.svg";


const ProductMainCard = ({ button1, button2, name, price, keywords}) => {
    return (
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
                                button1={button1}
                                button2={button2}
                                name={name}
                                price ={price}
                                keywords ={keywords}
                            />
                        </div>
                    </div>
                </div>
            </div>
        }
    />

    </div>
    );
}

export default ProductMainCard;