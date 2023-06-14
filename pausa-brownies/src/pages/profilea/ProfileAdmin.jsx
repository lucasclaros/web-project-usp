import React, {useState} from "react";
import "./css/ProfileAdmin.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json"
import SearchBar from "../components/SearchBar/SearchBar";


import { ReactComponent as ProfileIcon } from "./assets/profilea.svg";
import { ReactComponent as EditIcon } from "./assets/pencil.svg";
import { ReactComponent as RealBrownie } from "./assets/RealBrownie.svg";



const ProfileAdmin = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedBrownie, setSelectedBrownie] = useState(null);
    
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const results = brownieData.filter(
        (item) => item.name.toLowerCase().includes(query) && query.length >= 3
        );
        setSearchResults(results);
        setSelectedBrownie(null);
    };
    
    const handleBrownieClick = (brownie) => {
        setSelectedBrownie(brownie);
    };
    return (
        <div className="profile-admin-wrapper">
            <div className="profile-wrapper">
                <InfoCard
                    header={
                        <div className="profile-header">
                            <h1>Perfil    </h1>
                            <div className="admin-flag" title="Admin">  A  </div>
                        </div>
                    }
                    body={
                        <div className="profile-content-wrapper centered-content">
                            <div className="profile-content centered-content">
                                <div className="profile-main centered-content">
                                    <div className="profile-image">
                                        <ProfileIcon />
                                    </div>
                                    <div className="profile-info">
                                        <PausaTextField
                                            value={"Pausa Brownies"}
                                            label={"Nome"}
                                        />
                                        <PausaTextField
                                            value={"pausa@brownies.com"}
                                            label={"E-mail"}
                                        />
                                        <PausaTextField
                                            value={"(99) 99999-9999"}
                                            label={"Telefone"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="profile-options-wrapper">
                <InfoCard
                    header={"Opções"}
                    body={
                        <div className="admin-options centered-content">
                            <div className="first-row centered-content">
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Gerenciar Usuários"}
                                    />
                                </div>
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Gerenciar Produtos"}
                                    />
                                </div>

                            </div>
                            <div className="second-row centered-content">
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Relatório"}
                                    />
                                </div>
                                <div className="options-button">
                                    <PausaButton
                                        buttonText={"Log Out"}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="profile-search-wrapper">
                <p>Aqui fica a barra</p>
            </div>
            <div className="user-show-wrapper">
                <div className="user-management-wrapper">
                    <InfoCard
                        header={"Usuário"}
                        body={
                            <div className="user-management-wrapper">
                                <div className="user-management-content">
                                    <div className="user-management-image centered-content">
                                        <ProfileIcon />
                                    </div>
                                    <div className="user-management-info centered-content">
                                        <div className="user-info-edit centered-content">
                                            <PausaTextField
                                                value={"Pausa Brownies"}
                                                label={"Nome"}
                                            />
                                        </div>
                                        <div className="user-info-edit centered-content">
                                            <PausaTextField
                                                value={"pausa@brownies.com"}
                                                label={"E-mail"}
                                            />
                                        </div>
                                        <div className="user-info-edit centered-content">
                                            <PausaTextField
                                                value={"(99) 99999-9999"}
                                                label={"Telefone"}
                                            />
                                        </div>
                                        <div className="user-management-buttons centered-content">
                                            <div className="user-management-button edit">
                                                <PausaButton
                                                    buttonText={"Editar"}
                                                    icon={<EditIcon />}
                                                />
                                            </div>
                                            <div className="user-management-button delete">
                                                <PausaButton
                                                    buttonText={"Excluir"}
                                                    icon={<EditIcon />}
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                    />
                </div>
            </div>
            <div className="search-bar-products centered-content">
            <SearchBar
                        searchQuery={searchQuery}
                        handleSearch={handleSearch}
                    />
            </div>
            <div className="product-show-wrapper">
                {searchResults.length > 0 && !selectedBrownie && (
                <div className="products-results-wrapper">
                    <h3>Resultados da busca:</h3>
                     <ul>
                        {searchResults.map((item) => (
                            <li key={item.id} onClick={() => handleBrownieClick(item)}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedBrownie && (
                    <div className="selected-produt-wrapper">
                        <ProductMainCard
                            name={selectedBrownie.name}
                            price={selectedBrownie.price}
                            keywords={selectedBrownie.keywords.join(", ")}
                            button1={"Adicionar ao carrinho"}
                            button2={"Ver Detalhes"}
                        />
                    </div>
                )}

                {searchResults.length === 0 && !selectedBrownie && (
                    <p></p>
                )}
            </div>

            <div className="report-wrapper">
                <InfoCard
                    header={"Relatório"}
                    body={
                        <div className="report-content">
                            <div className="users-count centered-content">
                                <div className="text-title shaded-text">Usuários Cadastrados:</div>
                                <div className="text-content">32</div>
                            </div>
                            <div className="products-count centered-content">
                                <div className="text-title shaded-text">Produtos em Estoque:</div>
                                <div className="text-content">27</div>
                            </div>
                            <div className="sales-count centered-content">
                                <div className="text-title shaded-text">Vendas Totais:</div>
                                <div className="text-content">352</div>
                            </div>

                        </div>
                    }
                />
            </div>

        </div>
    );
};

export default ProfileAdmin;

