import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Edit.css";
import InfoCard from "../components/InfoCards/InfoCard";
import { ReactComponent as RealBrownie } from "../profilea/assets/RealBrownie.svg";
import brownieData from "../../mock/brownieData.json";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import PausaTextField from "../components/TextField/PausaTextField";

const Edit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [stock, setStock] = useState("");
  const [vaiBemCom, setVaiBemCom] = useState("");

  const item = brownieData.find((brownie) => brownie.id.toString() === id);

  useEffect(() => {
    const storedData = localStorage.getItem("brownieData");
    if (storedData) {
      const brownies = JSON.parse(storedData);
      const existingBrownie = brownies.find((brownie) => brownie.id === item.id);
      if (existingBrownie) {
        setName(existingBrownie.name);
        setPrice(existingBrownie.price.toString());
        setIngredients(existingBrownie.ingredients.join(", "));
        setStock(existingBrownie.stock.toString());
        setVaiBemCom(existingBrownie.vaiBemCom.join(", "));
      }
    }
  }, [item]);

  const handleSave = () => {
    const editedData = {
      id: item.id,
      name: name,
      price: parseFloat(price),
      keywords: item.keywords,
      ingredients: ingredients.split(",").map((ingredient) => ingredient.trim()),
      vaiBemCom: vaiBemCom.split(",").map((item) => item.trim()),
      stock: parseInt(stock),
    };

    const storedData = localStorage.getItem("brownieData");
    let brownies = storedData ? JSON.parse(storedData) : [];

    const index = brownies.findIndex((brownie) => brownie.id === item.id);

    if (index !== -1) {
      brownies[index] = editedData;
    } else {
      brownies.push(editedData);
    }

    localStorage.setItem("brownieData", JSON.stringify(brownies));

    alert("Brownie data saved successfully!");
  };

  return (
    <div className="edit-wrapper">
      <InfoCard
        header={item.name}
        body={
          <div className="product-edit-wrapper centered-content">
            <div className="product-edit-content centered-content">
              <div className="product-edit-image centered-content">
                <RealBrownie />
              </div>
              <div className="product-edit-info-wrapper">
                <InfoCard
                  header={"Edição de Produto"}
                  body={
                    <div className="product-edit-info">
                      <div className="edit-name centered-content">
                        <PausaTextField
                          name={"name"}
                          label={"Nome do Produto:"}
                          placeholder={"Nome do Produto"}
                          inputType={"text"}
                          value={name}
                          handleChange={(e) => setName(e.target.value)}
                          disabled={false}
                        />
                      </div>
                      <div className="edit-price centered-content">
                        <PausaTextField
                          name={"price"}
                          label={"Preço:"}
                          placeholder={"Preço"}
                          inputType={"text"}
                          value={price}
                          handleChange={(e) => setPrice(e.target.value)}
                          disabled={false}
                        />
                      </div>
                      <div className="edit-ingredients centered-content">
                        <PausaTextField
                          name={"ingredients"}
                          label={"Ingredientes:"}
                          placeholder={"Ingredientes"}
                          inputType={"text"}
                          value={ingredients}
                          handleChange={(e) => setIngredients(e.target.value)}
                          disabled={false}
                        />
                      </div>
                      <div className="edit-stock centered-content">
                        <PausaTextField
                          name={"stock"}
                          label={"Estoque:"}
                          placeholder={"Estoque"}
                          inputType={"number"}
                          value={stock}
                          handleChange={(e) => setStock(e.target.value)}
                          disabled={false}
                        />
                      </div>
                      <div className="edit-friends centered-content">
                        <PausaTextField
                          name={"friends"}
                          label={"Vai bem com:"}
                          placeholder={"Refrigerante, Café"}
                          inputType={"text"}
                          value={vaiBemCom}
                          handleChange={(e) => setVaiBemCom(e.target.value)}
                          disabled={false}
                        />
                      </div>
                    </div>
                  }
                />
              </div>
              <div className="edit-buttons">
                <div className="edit">
                  <PausaButton buttonText={"Editar Produto"} onClick={handleSave} />
                </div>

                <div className="delete">
                  <PausaButton buttonText={"Excluir Produto"} />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Edit;
