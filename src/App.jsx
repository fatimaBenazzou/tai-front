import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";

// Css Import
import "./App.scss";
import "./pages/DarkMode.scss";
import Traitement from "./pages/Traitement";
// import Traitement from "./pages/Traitement";

console.log(process.env.PUBLIC_URL);
const App = () => {
    return (
        <Router>
            {/* <ScrollToTop> */}
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/traitement"} element={<Traitement />} />
                </Routes>
            {/* </ScrollToTop> */}
        </Router>
    );
};

export default App;
