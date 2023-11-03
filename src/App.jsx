import Footer from "./components/Footers";
import Inscription from "./pages/Inscription";
import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inscription />} />
        <Inscription />
        <Footer />
      </Routes>
    </div>
  );
}

export default App;

