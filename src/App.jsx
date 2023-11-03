import React from "react";
import Footer from "./components/Footers";
import Inscription from "./pages/Inscription";
import Feed from "./pages/Feed";
import "./styles/index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as JotaiProvider }  from "jotai";
import store from "./redux/store";
import CookieClicker from "./pages/CookieClicker";

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <JotaiProvider>
            <Routes>
              <Route path="/" element={<Inscription />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/secret" element={<CookieClicker />} />
            </Routes>
            <Footer />
          </JotaiProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
