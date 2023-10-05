import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/header";

import "./styles/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
