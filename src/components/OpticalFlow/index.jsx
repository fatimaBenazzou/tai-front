import React from "react";
import SectionTitle from "../SectionTitle";
import bg from "../../assets/images/backgroundsub.svg";

const OpticalFlow = () => {
    return (
        <div className="section section-padding-2 bg-color-dark">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-7">
                        <SectionTitle
                            subtitle="Deuxieme Méthode"
                            title="Optical Flow."
                            description="Le flux optique est le mouvement apparent des objets, surfaces et contours d'une scène visuelle, causé par le mouvement relatif entre un observateur et la scène. dans le code utilisé on chercher a chaque fois the strongest corners avec la méthode de ShiTomasi. En faisant une estimation du flow avec lucas kanade method , on pourrait dessiner le chemin des objets en mouvement ( pas tous bien sûr )"
                            textAlignment="heading-light-left"
                            textColor=""
                        />
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-thumbnail ">
                            {/* <AnimationOnScroll
                                animateIn="zoomIn"
                                duration={2}
                                delay={300}
                                animateOnce={true}
                            > */}
                            <div className="large-thumb">
                                <img src={bg} alt="Laptop" />
                            </div>
                            {/* </AnimationOnScroll> */}
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1">
                    <img src={"/images/others/line-9.png"} alt="Circle" />
                </li>

                <li className="shape">
                    <img src={"/images/others/line-9.png"} alt="Circle" />
                </li>
                <li className="shape shape-3">
                    <img src={"/images/others/bubble-43.png"} alt="Circle" />
                </li>
                <li className="shape shape-2">
                    <img src={"/images/others/line-4.png"} alt="line" />
                </li>
            </ul>
        </div>
    );
};

export default OpticalFlow;
