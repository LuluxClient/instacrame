import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <Link to={"/"}>Déconnecter</Link>
      {" - "}
      <Link to={"/post"}>Poster</Link>
    </nav>
  );
};

export default Navbar;