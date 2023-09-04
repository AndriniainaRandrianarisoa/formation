import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/message"
        >
          Message
        </NavLink>
      </div>
    </>
  );
}
