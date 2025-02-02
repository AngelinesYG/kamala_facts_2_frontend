import React from "react";
import { NavLink } from "./NavbarElements";
import "./nav.css";

export default function Navbar() {
    return (
        <div className="main_div">
            <NavLink className="nav-link" to="/" exact activeStyle>
                Home
            </NavLink>
            <NavLink className="nav-link" to="/about" activeStyle>
                About
            </NavLink>
            <NavLink className="nav-link" to="/notes" activeStyle>
                Notes
            </NavLink>
        </div>
    );
}
