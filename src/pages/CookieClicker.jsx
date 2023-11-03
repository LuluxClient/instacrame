import React, { useState, useEffect } from "react";
import bellSound from "../assets/bell.mp3";
import Navbar from "../components/Navbar";

function CookieClicker() {
  const [score, setScore] = useState(() => {
    const savedScore = window.localStorage.getItem("score");
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [clickCount, setClickCount] = useState(0);

  const audio = new Audio(bellSound);

  function incrementScore() {
    setScore(score + 1);
    setClickCount(clickCount + 1);
  }

  useEffect(() => {
    window.localStorage.setItem("score", score);

    if (clickCount % 3 === 0 && clickCount > 0) {
      audio.play();
    }
  }, [score, clickCount]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1>Cookie Clicker</h1>
        <button onClick={incrementScore}>Click me!</button>
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default CookieClicker;
