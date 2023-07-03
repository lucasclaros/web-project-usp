import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/components/Navbar/Navbar";
import CartButton from "./pages/components/Buttons/CartButton/CartButton";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Footer from "./pages/components/Footer/Footer";
import Register from "./pages/register/Register";
import ProfileUser from "./pages/profileu/ProfileUser";
import ProfileAdmin from "./pages/profilea/ProfileAdmin";
import UserContext from "./context/UserContext";
import Description from "./pages/description/Description";
import Edit from "./pages/edit/Edit";
import CartItem from "./pages/components/CartItem/CartItem";
import Cart from "./pages/cart/Cart";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function App() {
    const isMobile = useMediaQuery("(max-width: 960px)");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, cart, setCart }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/menu" element={<Menu />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/profileu" element={<ProfileUser />} exact />
                <Route path="/profilea" element={<ProfileAdmin />} exact />
                <Route
                    path="/description/:id"
                    element={<Description />}
                    exact
                />
                <Route
                    path="/edit/:id"
                    element={<Edit />}
                    exact
                />
                <Route path="/cartitem" element={<CartItem />} exact />
                <Route path="/cart" element={<Cart />} exact />
            </Routes>
            <CartButton />
            {/* Navbar compensation */}
            <div style={{ height: isMobile ? "150px" : "80px" }}></div>
            <Footer />
        </UserContext.Provider>
    );
}

export default App;
