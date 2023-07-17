import React from "react";
import "./assets/ShopHistory.css";

const ShopHistory = () => {
    return (
    <div className="shop-history-wrapper">
        <div className="shop-history-header">
            Compra realizadas em 00/00/0000 as 00:00 no total de R$00,00
        </div>
        <div className="shop-history-content">
            <ul className="shop-history-list shaded-text">
                <li className="shop-history-item">
                    Brownie de Ameixa (5) - R$00,00
                </li>                      
                <li className="shop-history-item">
                    Brownie de Ameixa (5) - R$00,00                
                </li> 
                <li className="shop-history-item">
                    Brownie de Ameixa (5) - R$00,00
                </li>
                <li className="shop-history-item">
                    Brownie de Ameixa (5) - R$00,00
                </li>
            </ul>
        </div>    



    </div>
        
    )
    }

export default ShopHistory;