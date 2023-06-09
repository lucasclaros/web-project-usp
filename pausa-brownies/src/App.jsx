import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/components/Navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";
import Footer from "./pages/components/Footer/Footer";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/menu" element={<Menu />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/profile" element={<Profile />} exact />
            </Routes>
            {/* Navbar compensation */}
            <div style={{ height: "80px" }}></div>
            <Footer />
        </>
    );
}

export default App;
