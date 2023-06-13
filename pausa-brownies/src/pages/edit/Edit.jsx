import React from "react";
import "./Edit.css";
import InfoCard from "../components/InfoCards/InfoCard";
import { ReactComponent as RealBrownie } from "../profilea/assets/RealBrownie.svg";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import PausaTextField from "../components/TextField/PausaTextField"

const Edit = () => {
    return (
        <div className="edit-wrapper">
            <InfoCard
                header={"Produto X"}
                body={
                    <div className="product-edit-wrapper centered-content">
                        <div className="product-edit-content centered-content">
                            <div className="product-edit-image centered-content">
                                <RealBrownie />
                            </div>
                            <div className="product-edit-info-wrapper">
                                <InfoCard
                                    header={"Descrição"}
                                    body={
                                        <div className="product-edit-info">
                                            <div className="edit-name centered-content">
                                                <PausaTextField
                                                    name={"name"}
                                                    value={"Produto X"}
                                                    label={"Nome do Produto:"}
                                                    placeholder={"Nome do Produto"}
                                                    inputType={"text"}
                                                    handleChange={() => { }}
                                                    disabled={false}
                                                />
                                            </div>
                                            <div className="edit-price centered-content">
                                                <PausaTextField
                                                    name={"price"}
                                                    value={"R$ 10,00"}
                                                    label={"Preço:"}
                                                    placeholder={"Preço"}
                                                    inputType={"text"}
                                                    handleChange={() => { }}
                                                    disabled={false}
                                                />
                                            </div>
                                            <div className="edit-ingredients centered-content">
                                                <PausaTextField
                                                    name={"ingredients"}
                                                    value={"Ingredientes"}
                                                    label={"Ingredientes:"}
                                                    placeholder={"Ingredientes"}
                                                    inputType={"text"}
                                                    handleChange={() => { }}
                                                    disabled={false}
                                                />
                                            </div>
                                            <div className="edit-stock centered-content">
                                                <PausaTextField
                                                    name={"stock"}
                                                    value={11}
                                                    label={"Estoque:"}
                                                    placeholder={"Estoque"}
                                                    inputType={"number"}
                                                    handleChange={() => { }}
                                                    disabled={false}
                                                />
                                            </div>
                                            <div className="edit-friends centered-content">
                                                <PausaTextField
                                                    name={"friends"}
                                                    value={"Refrigerante, Café"}
                                                    label={"Vai bem com:"}
                                                    placeholder={"Refrigerante, Café"}
                                                    inputType={"text"}
                                                    handleChange={() => { }}
                                                    disabled={false}
                                                />
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="edit-buttons">
                                <div className="edit">
                                <PausaButton 
                                    buttonText={"Editar Produto"}
                                />
                                </div>

                                <div className="delete">
                                <PausaButton 
                                    buttonText={"Excluir Produto"}
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

export default Edit;