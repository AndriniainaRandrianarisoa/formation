import { NavLink } from "react-router-dom";

export default function NavBar() {


  return (
    <>
      <nav>
        <NavLink 
            to="/"
            className={ ({isActive }) => (isActive ? "activeLink" : undefined )} 
        > 
            Home 
        </NavLink>

        <NavLink 
            to="/contact"
            className={ ({isActive }) => (isActive ? "activeLink" : undefined )}
        > 
            Contact 
        </NavLink>

        <NavLink 
            to="/message"
            className={ ({isActive }) => (isActive ? "activeLink" : undefined )}> 
            Message 
        </NavLink>
      </nav>
    </>
  );
}
