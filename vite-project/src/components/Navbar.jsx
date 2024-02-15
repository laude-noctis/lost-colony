import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function NavBar() {
    return (
        <nav>
            <div class='username'>
                <h1>Lizzie Bumpers</h1>
                <h2>laude-noctis</h2>
            </div>
            <ul>
                <li>
                    <NavLink to='/' class='nav-link'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' class='nav-link'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' class='nav-link'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/resume' class='nav-link'>Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar