import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    return (
        <>
            <nav>

                <NavLink
                    to="/"
                    className={ ({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Home
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Contact
                </NavLink>

                <NavLink
                    to="/message"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Message
                </NavLink>

            </nav>
        </>
    )
}