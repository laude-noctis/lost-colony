import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function NavBar() {
    return (
        <nav>
            <h1>Lizzie Bumpers</h1>
            <h2>laude-noctis</h2>
            <ul>
                <li>
                    <NavLink to='/'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/resume'>Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar