import React from "react";
import Footer from "./components/Footers";
import Inscription from "./pages/Inscription";
import Feed from "./pages/Feed";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inscription />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;