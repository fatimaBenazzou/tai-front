import React from "react";
import BannerTraitement from "../../components/BannerTraitement";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Traitement = () => {
    return (
        <main className="main-wrapper">
            <Header />
            <BannerTraitement />
            <Footer />
        </main>
    );
};

export default Traitement;
