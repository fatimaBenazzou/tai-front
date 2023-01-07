import React from "react";
import SectionTitle from "../SectionTitle";

const BackgroundSub = () => {
    return (
        <div className={`section section-padding-2`}>
            <div className="container">
                <SectionTitle
                    subtitle="Premiére Méthode"
                    title="Backgroud Subtitution"
                    description="Sur une vidéo on a utilisé le modèle MOG2 qui sert à extraire l'arrière-plan et retourner , cela est une technique largement utilisée pour générer un masque de premier plan, un output binaire contenant les pixels appartenant aux objets en mouvement dans la scène.
                        Le calcule de masque d'avant-plan s’ effectue grâce à une soustraction entre l'image courante et un modèle d'arrière-plan, contenant la partie statique de la scène
                        ."
                    textAlignment="heading-right mb--40"
                    textColor=""
                />
            </div>
            <ul className="shape-group-7 list-unstyled">
                <li className="shape shape-1">
                    <img
                        src={"/images/others/circle-3.png"}
                        alt="circle"
                    />
                </li>
                <li className="shape shape-2">
                    <img src={"/images/others/bubble-1.png"} alt="Line" />
                </li>
            </ul>
        </div>
    );
};

export default BackgroundSub;
