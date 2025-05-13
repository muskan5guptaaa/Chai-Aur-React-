import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Digital Clock</h1>
      <div style={styles.clock}>{time}</div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  clock: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default App;
