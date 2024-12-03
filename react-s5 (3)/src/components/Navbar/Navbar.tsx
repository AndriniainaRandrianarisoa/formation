import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

    const isLoggedin = true;

    return (
        <>

        { isLoggedin ?
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
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
            :
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Home 2 
                </NavLink>

            
                <NavLink
                    to="/message"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}>
                    Message 2
                </NavLink>
            </nav>
            }
        </>
    )
}