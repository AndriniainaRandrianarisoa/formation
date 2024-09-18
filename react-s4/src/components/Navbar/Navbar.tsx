import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
/* DESTRUCTURATION
    const myObject = {
        name : 'Tom',
        age : 18,
        isActive : true
    }

    const name = myObject.name;
    const age = myObject.age;

    const {name, age, } = myObject;
*/ 

    return (
        <>

            <nav>
                <NavLink
                    to="/"
                    className={ ( { isActive } ) => (isActive ? "activeLink" : undefined ) }>
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