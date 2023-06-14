import React, {useState} from "react";
import "./css/ProfileAdmin.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import brownieData from "../../mock/brownieData.json"
import usersData from "../../mock/usersData.json"
import SearchBar from "../components/SearchBar/SearchBar";
import { ReactComponent as ProfileIcon } from "./assets/profilea.svg";
import { ReactComponent as EditIcon } from "./assets/pencil.svg";




const ProfileAdmin = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedBrownie, setSelectedBrownie] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const results = brownieData.filter(
        (item) => item.name.toLowerCase().includes(query) && query.length >= 2
        );
        setSearchResults(results);
        setSelectedBrownie(null);
    };

    
  
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
  

        const filtered = usersData.filter((user) =>
            user.name.toLowerCase().includes(inputValue.toLowerCase()) && inputValue.length >= 2
        );
        setFilteredUsers(filtered);
        setSelectedUser(null);

    };

    const handleBrownieClick = (brownie) => {
        setSelectedBrownie(brownie);
    };

    const handleClick = (user) => {
        setSelectedUser(user);
    };

    const totalStock = brownieData.reduce((total, item) => total + item.stock, 0);

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
            <div className="profile-search-wrapper">
                <SearchBar
                    searchQuery={query}
                    handleSearch={handleInputChange}
                    placeholder={"Buscar Usuários para Gerenciar"}
                />
            </div>
            <div className="profile-list-show-wrapper centered-content">
                {filteredUsers.length > 0 && !selectedUser && (
                    <div className="profile-results-wrapper centered-content">
                        <div className="search-title shaded-text">
                            Resultados da busca (clique no usuário para gerenciar):
                        </div>
                        <ul>
                            {filteredUsers.map((item) => (
                                <li className="search-result" key={item.id} onClick={() => handleClick(item)}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>    
              
                )} 
            </div>         
            
            {selectedUser && (
                <div className="user-show-wrapper">
                    <div className="user-management-wrapper">
                        <InfoCard
                            header={selectedUser.name}
                            body={
                                <div className="user-management-wrapper">
                                    <div className="user-management-content">
                                        <div className="user-management-image centered-content">
                                            <ProfileIcon />
                                        </div>
                                        <div className="user-management-info centered-content">
                                            <div className="user-info-edit centered-content">
                                                <PausaTextField
                                                    value={selectedUser.name}
                                                    label={"Nome"}
                                                />
                                            </div>
                                            <div className="user-info-edit centered-content">
                                                <PausaTextField
                                                    value={selectedUser.email}
                                                    label={"E-mail"}
                                                />
                                            </div>
                                            <div className="user-info-edit centered-content">
                                                <PausaTextField
                                                    value={selectedUser.telefone}
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
            )}
            {filteredUsers.length === 0 && !selectedUser && (
                <p></p>
            )}  
            <div className="search-bar-products centered-content">
                <SearchBar
                        searchQuery={searchQuery}
                        handleSearch={handleSearch}
                        placeholder={"Buscar Produtos para Gerenciar"}
                />
            </div>
            <div className="product-show-wrapper">
                {searchResults.length > 0 && !selectedBrownie && (
                <div className="products-results-wrapper centered-content">
                    <div className="search-title shaded-text">
                        Resultados da busca (clique no produto para gerenciar):
                    </div>
                     <ul>
                        {searchResults.map((item) => (
                            <li className="search-result" key={item.id} onClick={() => handleBrownieClick(item)}>
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
                                <div className="text-content">{totalStock}</div>
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

