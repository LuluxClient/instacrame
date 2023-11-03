import React, { useState, useEffect } from 'react';

function CookieClicker() {
  const [score, setScore] = useState(() => {
    const savedScore = window.localStorage.getItem('score');
    return savedScore ? parseInt(savedScore) : 0;
  });

  function incrementScore() {
    setScore(score + 1);
  }

  useEffect(() => {
    
    window.localStorage.setItem('score', score);
  }, [score]);

  return (
    <div>
      <h1>Cookie Clicker</h1>
      <button onClick={incrementScore}>Click me!</button>
      <p>Score: {score}</p>
    </div>
  );
}

export default CookieClicker;
