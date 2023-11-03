// import { useAtom } from "jotai";
import { Link } from "react-router-dom";
// import { userAtom } from "../utils/globalState";

const Navbar = () => {
//   const [user] = useAtom(userAtom);

  return (
    <nav>
      <Link to={"/"}>Déconnecter</Link>
      {" - "}
      <Link to={"/post"}>Poster</Link>
      {" - "}
      {/* <span>
        Salut {user.name}
      </span> */}
    </nav>
  );
};

export default Navbar;