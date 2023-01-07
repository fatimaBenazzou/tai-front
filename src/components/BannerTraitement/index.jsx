import React, { useState } from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import DropZone from "./DropZone";
import "./style.scss";

const handleExtract = (e, url, setProgress, done) => {
    var last_index = 0;
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onprogress = function () {
        var curr_index = xhr.responseText.length;
        if (last_index === curr_index) return;
        setProgress(Number(xhr.responseText.substring(last_index, curr_index).split("\n")[0]));
        last_index = curr_index;
    };
    xhr.onload = (r) => {
        setProgress(undefined);
        console.log(r);
        done();
    };
    xhr.send();
};

const BannerTraitement = () => {
    const [fileName, setFileName] = useState("");
    const [opticalFlow, setOpticalFlow] = useState(false);
    const [progress, setProgress] = useState(undefined);
    const [backgroundsub, setBackgroundsub] = useState(false);

    const BsHandler = (e) => {
        handleExtract(
            e,
            "http://localhost:3001/backgroundsub/" + fileName + ".mp4",
            setProgress,
            () => {
                setBackgroundsub(true);
            }
        );
    };

    const OfHandler = (e) => {
        handleExtract(
            e,
            "http://localhost:3001/opticalflow/" + fileName + ".mp4",
            setProgress,
            () => {
                setOpticalFlow(true);
            }
        );
    };

    return (
        <div className="banner traitement ">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content ">
                            {/* <AnimationOnScroll
                                animateIn="zoomIn"
                                duration={2}
                                delay={300}
                                animateOnce={true}
                            > */}
                            {/* <div className="large-thumb">
                                    <img src={traitement} alt="Laptop" />
                                </div> */}
                            {/* </AnimationOnScroll> */}
                            {/* <AnimationOnScroll animateIn="fadeInDowm" animateOnce={true} delay={0}> */}
                            <h1 className="titleT">Testez nos solutions</h1>
                            <span className="subtitleT">Il suffit de deposer une video !</span>

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
                                {fileName ? (
                                    <video
                                        controls
                                        width={"100%"}
                                        src={"http://localhost:3001/public/" + fileName + ".mp4"}
                                    />
                                ) : (
                                    <DropZone setFileName={setFileName} />
                                )}
                            </div>
                            {/* </AnimationOnScroll> */}
                        </div>
                    </div>
                </div>
                <div className={`section section-padding-2`}>
                    <div className="container methode">
                        <h2 className="title">Choisissez une Méthode </h2>
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column gap-3">
                                <button
                                    onClick={BsHandler}
                                    type="submit"
                                    className="axil-btn btn-gradient mx-auto"
                                >
                                    Background Substraction
                                </button>
                                {backgroundsub && (
                                    <>
                                        <video
                                            controls
                                            autoPlay
                                            width={"100%"}
                                            src={
                                                "http://localhost:3001/public/" +
                                                fileName +
                                                "-subb.mp4"
                                            }
                                        />
                                        <video
                                            controls
                                            autoPlay
                                            width={"100%"}
                                            src={
                                                "http://localhost:3001/public/" +
                                                fileName +
                                                "-mask.mp4"
                                            }
                                        />
                                    </>
                                )}
                            </div>
                            <div className="col-lg-6 d-flex flex-column gap-3">
                                <button
                                    onClick={OfHandler}
                                    type="submit"
                                    className="axil-btn btn-gradient mx-auto"
                                >
                                    Optical Flow
                                    {/* <div className="progresse "></div> */}
                                </button>
                                {opticalFlow && (
                                    <video
                                        controls
                                        autoPlay
                                        width={"100%"}
                                        src={"http://localhost:3001/public/" + fileName + "-of.mp4"}
                                    />
                                )}
                            </div>
                        </div>
                        {progress}
                        <div className="output"></div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-21">
                <li className="shape shape-2">
                    <img src={"/images/others/bubble-38.png"} alt="Bubble" />
                </li>
                <li className="shape shape-3">
                    <img src={"/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-4">
                    <img src={"/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-5">
                    <img src={"/images/others/bubble-14.png"} alt="Bubble" />
                </li>
                <li className="shape shape-6">
                    <img src={"/images/others/bubble-40.png"} alt="Bubble" />
                </li>
                <li className="shape shape-7">
                    <img src={"/images/others/bubble-41.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    );
};

export default BannerTraitement;
