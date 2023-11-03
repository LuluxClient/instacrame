import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Déconnecter</Link>
      {" - "}
      <Link to={"/post"}>Cookie clicker</Link>
    </nav>
  );
};

export default Navbar;
