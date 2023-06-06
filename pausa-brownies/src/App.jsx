import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/components/Navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Login from "./pages/login/Login";

function App() {
    return (
        <>
            <Navbar />
            {/* Navbar compensation */}
            <div style={{ height: "80px" }}></div>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" element={<About />} exact />
                <Route path="/contact" element={<Contact />} exact />
                <Route path="/menu" element={<Menu />} exact />
                <Route path="/login" element={<Login />} exact />
            </Routes>
        </>
    );
}

export default App;