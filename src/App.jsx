import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (value) => {
    if(value === 'C') {
      setInputValue('');
    } else if(value === '⌫') {
      setInputValue((prev) => prev.slice(0, -1));
    } else if(value === '=') {

    } else{

    setInputValue((prevValue) => 
      prevValue + value
    );
    }
  };

  return (
    <div className="calculator">
      <Display inputValue={inputValue} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;