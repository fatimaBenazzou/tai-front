import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"

const Footer = () => {

    return (

        <div className="section call-to-action-area ">
            <div className="container ">
                <div className="call-to-action">
                    <div className="section-heading heading-light">
                        <span className="subtitle">Ensemble</span>
                        <h2 className="title">Commençant Le traitement d'images dés Aujourd’hui !</h2>
                        <Link to={"/contact"} className="axil-btn btn-large btn-fill-white">
                            Estimate Project
                        </Link>
                    </div>
                 
                </div>
            </div>
            <ul className="list-unstyled shape-group-9">
                {/* <li className="shape shape-1"><img src={"/images/others/bubble-12.png"} alt="Comments" /></li> */}
                <li className="shape shape-2"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-3"><img src={"/images/others/bubble-13.png"} alt="Comments" /></li>
                <li className="shape shape-4"><img src={"/images/others/bubble-14.png"} alt="Comments" /></li>
                <li className="shape shape-5"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
                <li className="shape shape-6"><img src={"/images/others/bubble-15.png"} alt="Comments" /></li>
                <li className="shape shape-7"><img src={"/images/others/bubble-16.png"} alt="Comments" /></li>
            </ul>
           
            <div className="footer-bottom">
                    <div className="footer-copyright">
                        <span className="copyright-text">
                            © {new Date().getFullYear()}. All rights reserved by{" "}
                            <a href="https://.com/">3BM</a>.
                        </span>
                    </div>
                </div>
        </div>
    )

}

export default Footer;