import React from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import BackgroundSub from "../../components/BackgroundSub";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OpticalFlow from "../../components/OpticalFlow";
import Presentation from "../../components/Presentation.jsx";
import SEO from "../../components/SEO";
import Team from "../../components/Team";
import "../DarkMode.scss";

const MainPage = () => {
    return (
        <>
            <SEO title="3BM" />
            <main className="main-wrapper">
                <Header />
                <Banner />
                <Presentation />
                <OpticalFlow />
                <BackgroundSub />
                <Team />
                <Footer />
            </main>
        </>
    );
};

export default MainPage;
