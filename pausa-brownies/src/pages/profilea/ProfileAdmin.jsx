
import React, { useContext, useState, useEffect, useCallback } from "react";
import "./css/ProfileAdmin.css";
import InfoCard from "../components/InfoCards/InfoCard";
import PausaTextField from "../components/TextField/PausaTextField";
import PausaButton from "../components/Buttons/PausaButton/PausaButton";
import ProductMainCard from "../components/ProductMainCard/ProductMainCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { ReactComponent as ProfileIcon } from "./assets/profilea.svg";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";







const ProfileAdmin = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedBrownie, setSelectedBrownie] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [brownieData, setBrownieData] = useState([]);

    
    const navigate = useNavigate();
    useEffect(() => {
        const jsonBrownieData = require("../../mock/brownieData.json");

        const storedBrownieData = JSON.parse(localStorage.getItem("brownieData")) || [];
      
        const mergedBrownieData = jsonBrownieData.map((jsonBrownie) => {
          const storedBrownie = storedBrownieData.find((stored) => stored.id === jsonBrownie.id);
          return storedBrownie ? { ...jsonBrownie, ...storedBrownie } : jsonBrownie;
        });
      
        setBrownieData(mergedBrownieData);
      }, []);

      useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (!localUser) {
          navigate("/login");
        }
      
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        setRegisteredUsers(registeredUsers);
        setFilteredUsers(registeredUsers);
      }, []);

    const handleEditUser = useCallback(
        (event) => {
          event.preventDefault();
          if (Object.values(selectedUser).includes("")) {
            alert("Preencha todos os campos");
            return;
          }
      
          const updatedUsers = filteredUsers.map((user) => {
            if (user.email === selectedUser.email) {
              return {
                ...user,
                name: selectedUser.name,
                email: selectedUser.email,
                phone: selectedUser.phone,
              };
            }
            return user;
          });
      
          setFilteredUsers(updatedUsers);
          setSelectedUser(null);
      
          localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      
          alert("Usuário atualizado com sucesso!");
        },
        [filteredUsers, selectedUser]
    );

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
    
        const results = brownieData.filter(
        (item) => item.name.toLowerCase().includes(query)
        );
        setSearchResults(results);
        setSelectedBrownie(null);
    };

    
  
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
    
        const filtered = registeredUsers.filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase())
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

    const handleDelete = (user) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
          const updatedUsers = filteredUsers.filter((item) => item.email !== user.email);
          setFilteredUsers(updatedUsers);
          setSelectedUser(null);
          localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
        }
      };
      
    
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
        const { name, value } = e.target;
      
        const updatedUsers = filteredUsers.map((user) => {
          if (user.email === selectedUser.email) {
            return { ...user, [name]: value };
          }
          return user;
        });
      
        setFilteredUsers(updatedUsers);
      };
      

    const { user, setUser } = useContext(UserContext);
    
    const handleLogoff = (event) => {
        event.preventDefault();
        localStorage.removeItem("user");
        setUser(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/login");
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
            <div className="profile-search-wrapper centered-content">
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
                                                label={"Nome: " + selectedUser.name}
                                                handleChange={handleChange}
                                                name="name"
                                            />
                                            </div>
                                            <div className="user-info-edit centered-content">
                                            <PausaTextField
                                                label={"E-mail: " + selectedUser.email}
                                                handleChange={handleChange}
                                                name="email"
                                                />
                                            </div>
                                            <div className="user-info-edit centered-content">
                                            <PausaTextField
                                                label={"Telefone: " + selectedUser.phone}
                                                handleChange={handleChange}
                                                name="phone"
                                                />
                                            </div>
                                            <div className="user-management-buttons centered-content">
                                                <div className="user-management-button delete">
                                                    <PausaButton
                                                        buttonText={"Excluir"}
                                                        onClick={() => handleDelete(selectedUser)}
                                                    />
                                                </div>
                                                <div className="user-management-button save">
                                                <PausaButton
                                                    buttonText={"Salvar"}
                                                    onClick={handleEditUser}
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
                {searchQuery === '' && !selectedBrownie && (
                    <div className="products-results-wrapper centered-content">
                    <div className="search-title shaded-text">
                        Resultados da busca (clique no produto para gerenciar):
                    </div>
                    <ul>
                        {brownieData.map((item) => (
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
                        button={"Editar Brownie"}
                        toInfo={`/description/${selectedBrownie.id}`}
                        to={`/edit/${selectedBrownie.id}`}

                    />
                    </div>
                )}

                {searchQuery !== '' && searchResults.length === 0 && !selectedBrownie && (
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

            <div className="logoff-admin centered-content">
                <PausaButton
                    buttonText={"Logoff"}
                    onClick={handleLogoff}
                />
            </div>

        </div>
    );
};

export default ProfileAdmin;

