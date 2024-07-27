import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (startTime) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  const handleClick = () => {
    if (!startTime) {
      setStartTime(Date.now());
    }
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
    setStartTime(null);
    setElapsedTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;
    return `${minutes}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <div className="App">
      <h1>Кликер</h1>
      <p>Клики: {count}</p>
      <p>Время: {formatTime(elapsedTime)}</p>
      <button onClick={handleClick}>Кликни!</button>
      <button onClick={handleReset}>Вернуть</button>
    </div>
  );
}

export default App;
