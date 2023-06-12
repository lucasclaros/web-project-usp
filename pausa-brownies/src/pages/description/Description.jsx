import React from "react";
import "./Description.css";
import InfoCard from "../components/InfoCards/InfoCard";
import { ReactComponent as RealBrownie } from "../profilea/assets/RealBrownie.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";

const Description = () => {
    return (
        <div className="description-wrapper">
            <InfoCard
                header={"Produto X"}
                body={
                    <div className="product-description-wrapper centered-content">
                        <div className="product-description-content centered-content">
                            <div className="product-description-image centered-content">
                                <RealBrownie />
                            </div>
                            <div className="product-description-info-wrapper">
                                <InfoCard
                                    header={"Descrição e Comentários"}
                                    body={
                                        <div className="product-description-info">
                                            <div className="product-name centered-content">
                                                <div className="text-title shaded-text">Nome do Produto:</div>
                                                <div className="text-content">Brigadeiro Tradicional</div>
                                            </div>
                                            <div className="product-price centered-content">
                                                <div className="text-title shaded-text">Preço:</div>
                                                <div className="text-content">6 reais</div>
                                            </div>
                                            <div className="product-ingredients centered-content">
                                                <div className="text-title shaded-text">Ingredientes:</div>
                                                <div className="text-content">Massa de Chocolate, Sem Recheio</div>
                                            </div>
                                            <div className="product-stock centered-content">
                                                <div className="text-title shaded-text">Em estoque:</div>
                                                <div className="text-content">12</div>
                                            </div>
                                            <div className="product-friends centered-content">
                                                <div className="text-title shaded-text">Vai bem com:</div>
                                                <div className="text-content">Café, Refrigerante</div>
                                            </div>

                                            <div className="product-comments">
                                                <p className="comment-text">“É literalmente um dos melhores brownies que eu já comi”</p>
                                                <p className="comment-text">“Nossa Senhora”</p>
                                                <p className="comment-text">“Um dos melhores que eu já comi sem brincadeira”</p>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="description-buttons">
                                <PausaButton
                                    buttonText={"Adicionar ao Carrinho"}
                                />
                                <PausaButton
                                    buttonText={"Voltar ao Cardápio"}
                                />
                            </div>
                        </div>

                    </div>
                }
            />
        </div>







    );
}

export default Description;