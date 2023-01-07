import React from "react";
import { Link } from "react-router-dom";

const nav = [
    {
        name: "Banner",
        to: "#Banner",
    },
    {
        name: "Preview",
        to: "#Preview",
    },
    {
        name: "Team",
        to: "#Team",
    },
    {
        name: "Contact",
        to: "#Contact",
    },
];

const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                {nav.map((n, i) => (
                    <li key={i}>
                        <Link to={n.to}>{n.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
