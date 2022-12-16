import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    title: "HOME"
  },
  {
    path: "/about",
    title: "ABOUT"
  },
  {
    path: "/contact",
    title: "CONTACT"
  },
  {
    path: "/login",
    title: "LOGIN"
  },
  {
    path: "/users",
    title: "USERS"
  }
];

function Navbar() {
  const defaultStyle = {
    textDecoration: "none",
    color: "black"
  };

  const activeStyle = {
    textDecoration: "none",
    color: "green"
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        margin: "auto",
        background: "#cecece",
        padding: "20px"
      }}
    >
      {links.map((link) => (
        // <Link key={link.path} to={link.path}>
        //   {link.title}
        // </Link>
        <NavLink
          key={link.path}
          to={link.path}
          // style={({ isActive }) => {
          //   return isActive ? activeStyle : defaultStyle;
          // }}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
