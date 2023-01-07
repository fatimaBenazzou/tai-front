import React from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import home from "../../assets/images/home.svg";
import "./style.scss";

const Banner = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            {/* <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}> */}
                                <h1 className="title">
                                Backgroud Subtitution &amp; Optical Flow.
                                    
                                </h1>
                                <span className="subtitle">
                                Essayez les 2 méthodes les plus utilisées en imagerie et en
                                    tracking.
                                </span>
                                <Link
                                    to="/traitement"
                                    className="axil-btn btn-fill-primary btn-large"
                                >
                                    Get Started
                                </Link>
                            {/* </AnimationOnScroll> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            {/* <AnimationOnScroll
                                animateIn="zoomIn"
                                duration={2}
                                delay={300}
                                animateOnce={true}
                            > */}
                                <div className="large-thumb">
                                    <img src={home} alt="Laptop" />
                                </div>
                            {/* </AnimationOnScroll> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
