import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const vezes = () => {
    setCount((prevCount)=> prevCount + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Não aperte o botão
        </p>cd
        <button 
          onClick={vezes}> [:():]
        </button>
        <p> 
          Vezes que me desobedeceram: {count}
        </p>
      </header>
    </div>
  );
}

export default App;
