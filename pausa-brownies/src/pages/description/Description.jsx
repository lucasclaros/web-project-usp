import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./Description.css";
import InfoCard from "../components/InfoCards/InfoCard";
import RealBrownie from "../profilea/assets/RealBrownie.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import brownieData from "../../mock/brownieData.json";
import UserContext from "../../context/UserContext";

const Description = () => {
    const { id } = useParams();
    const { setCart } = useContext(UserContext);

    const brownie = brownieData.find((brownie) => brownie.id.toString() === id);
    const formattedPrice = brownie.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const addToCart = (item, quantity) => {
        const updatedCart = [
            ...JSON.parse(localStorage.getItem("cart") || "[]"),
            { item, quantity },
        ];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="description-wrapper">
            {brownie && (
                <InfoCard
                    header={brownie.name}
                    body={
                        <div className="product-description-wrapper centered-content">
                            <div className="product-description-image centered-content">
                                <img src={RealBrownie} alt="brownie" />
                            </div>
                            <div className="product-description-info-wrapper">
                                <InfoCard
                                    header={"Descrição e Comentários"}
                                    body={
                                        <div className="product-description-info">
                                            <div className="product-name centered-content">
                                                <div className="text-title shaded-text">
                                                    Nome do Produto:
                                                </div>
                                                <div className="text-content">
                                                    {brownie.name}
                                                </div>
                                            </div>
                                            <div className="product-price centered-content">
                                                <div className="text-title shaded-text">
                                                    Preço:
                                                </div>
                                                <div className="text-content">
                                                    {formattedPrice}
                                                </div>
                                            </div>
                                            <div className="product-ingredients centered-content">
                                                <div className="text-title shaded-text">
                                                    Ingredientes:
                                                </div>
                                                <div className="text-content">
                                                    {brownie.ingredients.join(
                                                        ", "
                                                    )}
                                                </div>
                                            </div>
                                            <div className="product-stock centered-content">
                                                <div className="text-title shaded-text">
                                                    Em estoque:
                                                </div>
                                                <div className="text-content">
                                                    {brownie.stock}
                                                </div>
                                            </div>
                                            <div className="product-friends centered-content">
                                                <div className="text-title shaded-text">
                                                    Vai bem com:
                                                </div>
                                                <div className="text-content">
                                                    {brownie.vaiBemCom.join(
                                                        ", "
                                                    )}
                                                </div>
                                            </div>

                                            <div className="product-comments">
                                                <p className="comment-text centered-content">
                                                    “É literalmente um dos
                                                    melhores brownies que eu já
                                                    comi”
                                                </p>
                                                <p className="comment-text centered-content">
                                                    “Nossa Senhora”
                                                </p>
                                                <p className="comment-text centered-content">
                                                    “Um dos melhores que eu já
                                                    comi sem brincadeira”
                                                </p>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="description-buttons centered-content">
                                <PausaButton
                                    buttonText={"Adicionar ao Carrinho"}
                                    to={"/cart"}
                                    onClick={() => addToCart(brownie, 1)}
                                />
                                <PausaButton
                                    buttonText={"Voltar ao Cardápio"}
                                    to={"/menu"}
                                />
                            </div>
                        </div>
                    }
                />
            )}
        </div>
    );
};

export default Description;
