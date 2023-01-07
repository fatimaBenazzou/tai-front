import React from "react";
import SectionTitle from "../SectionTitle";

const Presentation = () => {
    return (
        <div className="section section-padding-2">
            <div className="container">
                <SectionTitle
                    subtitle="Featured Case Study"
                    title="Design startup movement"
                    description="            
                        Le travail réalisé est une application de deux méthodes couramment utilisées
                        dans l'imagerie et le tracking la première qui est le BS et l'optique flow"
                    textAlignment="heading-ligh mb--40t"
                    textColor=""
                />
            </div>
            {/* <ul className="list-unstyled shape-group-10">
            <li className="shape shape-3">
                    <img
                        src={"/images/others/bubble-43.png"}
                        alt="Circle"
                    />
                </li>
             
                <li className="shape shape-2">
                    <img src={"/images/others/line-4.png"} alt="line" />
                </li>


               
            </ul> */}
        </div>
    );
};

export default Presentation;
