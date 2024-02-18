import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
    return (
        <nav>
            <div className='username'>
                <h1>Lizzie Bumpers</h1>
                <h2>laude-noctis</h2>
            </div>
            <ul>
                <li>
                    <NavLink to='/' className='nav-link'>About Me</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio' className='nav-link'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/resume' className='nav-link'>Resume</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar