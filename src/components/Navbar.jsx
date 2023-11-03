import React from "react";
import { Link } from "react-router-dom";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Déconnecter</Link>
      {" - "}
      <Link to={"/secret"}>Cookie clicker</Link>
    </nav>
  );
};

export default Navbar;
