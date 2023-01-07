import React from 'react';
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';
import "./style.scss";

const allData = [
    {name: "BENAZZOU Fatima", image: "/images/fatima.jpg", matricule: "191931081129", email: "b.fati2102@gmail.com"},
    {name: "BENAZZOU Fatima", image: "/images/fatima.jpg", matricule: "191931081120", email: "b.fati2102@gmail.com"},
    {name: "BENAZZOU Fatima", image: "/images/fatima.jpg", matricule: "191931081121", email: "b.fati2102@gmail.com"},
    {name: "BENAZZOU Fatima", image: "/images/fatima.jpg", matricule: "191931081123", email: "b.fati2102@gmail.com"},
];

const Team = () => {
    return (
        <div className="section section-padding bg-color-dark pb--70 pb_lg--20 pb_md--0">
        <div className="container">
            <div className="section-heading heading-light">
            <span className="subtitle">Our valus</span>
            <h2 className="title mb--50">Meet The Team</h2>
            <p>Nulla facilisi. Nullam in magna id dolor 
                blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
            </div>
            <div className="row">
                {allData.map((data) => (
                    <div className="col-xl-3 col-sm-6" key={data.matricule}>
                        <div className="team-grid">
                        <div className="team-details-thumb">
                            <Tilty perspective={3000} reset={false}>
                                <img className="paralax-image" src={data.image} alt="Thumbnail" />
                            </Tilty>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <Link >
                                        {data.name}
                                    </Link>                                   
                                </h4>
                                <a href={`mailto:${data.email}`} className="designation" >{data.email}</a>
                                <span className="designation" >{data.matricule}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/* <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={"/images/others/circle-1.png"} alt="Circle" /></li>
            <li className="shape shape-2"><img src={"/images/others/line-3.png"} alt="Circle" /></li>
            <li className="shape shape-3"><img src={"/images/others/bubble-5.png"} alt="Circle" /></li>
        </ul> */}
    </div>

    )
}

export default Team;